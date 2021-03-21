const connection = require("../boot/dbConnection");

function parseQueryFieldsString(queryFieldsString) {
  const fieldsObject = {
    id: "employee.employee_id",
    lastname: "employee.lastname",
    first_name: "employee.first_name",
    middle_name: "employee.middle_name",
    phone: "employee.phone",
    email: "employee.email",
    date_birth: "employee.date_birth",
    date_receipt: "employee.data_receipt",
    date_dismissal: "employee.data_dismissal",
    address: "employee.address",
    place_birth: "employee.place_birth",
    photo: "employee.photo",
  }
  const queryFields = queryFieldsString.split(",").map(queryField => {
    return queryField.trim();
  });
  const parsed = queryFields.reduce((acc, queryField) => {
    const field = fieldsObject[queryField];
    if (field) {
      acc.push(field);
    }
    return acc;
  }, []);
  return parsed;
}

function parseQueryIncludeString(includeQueryString) {
  const fieldsObject = {
    position: "position.position_name as position",
    projects: "project as projects",
  };
  const joinsObject = {
    position: "inner join position on employee.id_position = position.position_id",
    projects: "inner join project as projects on employee.id_position = position.position_id",
  };
  const fieldsToInclude = includeQueryString.split(",").map(fieldToInclude => {
    return fieldToInclude.trim();
  });
  const parsed = fieldsToInclude.reduce((acc, fieldToInclude) => {
    const field = fieldsObject[fieldToInclude];
    const join = joinsObject[fieldToInclude];
    if (field) {
      acc.fields.push(field);
    }
    if (join) {
      acc.joins.push(join);
    }
    return acc;
  }, { fields: [], joins: [] });
  return parsed;
}

function wrapInString(value) {
  return `'${value}'`;
}

function convertFormFieldsToDatabaseFields(formFields) {
  const formFieldsDatabaseFields = {
    "employee[lastname]": { column: "e.lastname", value: wrapInString(formFields["employee[lastname]"]) },
    "employee[first_name]": { column: "e.first_name", value: wrapInString(formFields["employee[first_name]"]) },
    "employee[middle_name]": { column: "e.middle_name", value: wrapInString(formFields["employee[middle_name]"]) },
    "employee[sex]": {
      column: "e.id_gender",
      value: formFields["employee[sex]"] ? `(SELECT gender.gender_id FROM gender WHERE gender.gender_name = '${formFields["employee[sex]"]}')` : ''
    },
    "employee[date_birth]": { column: "e.date_birth", value: wrapInString(formFields["employee[date_birth]"]) },
    "nationality_name": {
      column: "e.id_nationality",
      value: formFields["nationality_name"] ? `(SELECT nationality.nationality_id FROM nationality WHERE nationality.nationality_name = '${formFields["nationality_name"]}')` : ''
    },
    "employee[place_birth]": { column: "e.place_birth", value: wrapInString(formFields["employee[place_birth]"]) },
    "employee[martial_status_name]": {
      column: "e.id_marital_status",
      value: formFields["employee[martial_status_name]"] ? `(SELECT marital_status.marital_status_id FROM marital_status WHERE marital_status.marital_status_name = '${formFields["employee[martial_status_name]"]}')` : ''
    },
    "employee[position_name]": {
      column: "e.id_position",
      value: formFields["employee[position_name]"] ? `(SELECT result.position_id from (select position.position_id FROM position WHERE position.position_name = '${formFields["employee[position_name]"]}') as result)` : ''
    },
    "employee[department_name]": {
      column: "p.id_department",
      value: formFields["employee[department_name]"] ? `(select result.department_id from
        (SELECT department.department_id FROM employee
          inner join position on employee.id_position=position.position_id
          inner join department on department.department_id = position.id_department
          WHERE department.department_name = '${formFields["employee[department_name]"]}'
          limit 1
        ) as result
      )` : ''
    },
    "employee[date_receipt]": {
      column: "e.date_receipt",
      value: wrapInString(formFields["employee[date_receipt]"])
    },
    "employee[date_dismissal]": {
      column: "e.date_dismissal",
      value: wrapInString(formFields["employee[date_dismissal]"])
    },
    "employee[phone]": {
      column: "e.phone",
      value: wrapInString(formFields["employee[phone]"])
    },
    "employee[email]": {
      column: "e.email",
      value: wrapInString(formFields["employee[email]"])
    },
    "employee[address]": {
      column: "e.address",
      value: wrapInString(formFields["employee[address]"])
    },

    "project[project_name]": {
      column: "pr.project_name",
      value: wrapInString(formFields["project[project_name]"])
    },
    "project[customer]": {
      column: "pr.customer",
      value: wrapInString(formFields["project[customer]"])
    },
    "project[type_develop_name]": {
      column: "ep.id_type_develop",
      value: formFields["project[type_develop_name]"] ? `(
        select result.id_type_develop from (
          SELECT employee_project.id_type_develop FROM employee_project
          inner join type_develop on employee_project.id_type_develop = type_develop.type_develop_id
          WHERE type_develop.type_develop_name = '${formFields["project[type_develop_name]"]}'
          limit 1
        ) as result
      )` : ''
    },

    "exwork[organisation]": {
      column: "ew.organisation",
      value: wrapInString(formFields["exwork[organisation]"])
    },
    "exwork[position]": {
      column: "ew.position",
      value: wrapInString(formFields["exwork[position]"])
    },
    "exwork[date_receipt]": {
      column: "ew.data_receipt",
      value: wrapInString(formFields["exwork[date_receipt]"])
    },
    "exwork[reason_dismissal]": {
      column: "ew.reason_dismissal",
      value: wrapInString(formFields["exwork[reason_dismissal]"])
    },

    "education[view_education_name]": {
      column: "ed.id_view",
      value: formFields["education[view_education_name]"] ? `(SELECT view_education.view_education_id FROM view_education WHERE view_education.view_education_name = '${formFields["education[view_education_name]"]}')` : ''
    },
    "education[name_institution]": {
      column: "ed.name_institution",
      value: wrapInString(formFields["education[name_institution]"])
    },
    "education[specialty_name]": {
      column: "ed.id_specialty",
      value: formFields["education[specialty_name]"] ? `(SELECT specialty.specialty_id FROM specialty WHERE specialty.specialty_name = '${formFields["education[specialty_name]"]}')` : ''
    },
    "education[rank]": {
      column: "ed.rank",
      value: wrapInString(formFields["education[rank]"])
    },
    "education[form_education_name]": {
      column: "ed.id_form_education",
      value: formFields["education[position_name]"] ? `(SELECT form_education.form_education_id FROM form_education WHERE form_education.form_education_name = '${formFields["education[form_education_name]"]}')` : ''
    },
    "education[number_diploma]": {
      column: "ed.number_diploma",
      value: wrapInString(formFields["education[number_diploma]"])
    },
    "education[date_receipt]": {
      column: "ed.date_receipt",
      value: wrapInString(formFields["education[date_receipt]"])
    },
    "education[date_expiration]": {
      column: "ed.date_expiration",
      value: wrapInString(formFields["education[date_expiration]"])
    },
  }
  const databaseFields = Object.keys(formFields).map(formField => {
    return formFieldsDatabaseFields[formField];
  })
  return databaseFields.filter(databaseField => {
    return databaseField?.value;
  })
}

exports.update = async function (id, formDataFields) {
  const databaseFieldsToUpdate = convertFormFieldsToDatabaseFields(formDataFields);
  connection.query(`
  update employee as e, project as pr, ex_work as ew, education as ed, position as p, employee_project as ep
  set ${databaseFieldsToUpdate.reduce((acc, curr) => {
    acc.push(`${curr.column} = ${curr.value}`);
    return acc;
  }, [])}
  where e.employee_id = :employee_id and p.position_id=e.id_position;
  `, { employee_id: id });
}

exports.delete = async function (id) {
  await connection.query("delete from employee where employee.employee_id=:id ", { id });
}

exports.getFullInformation = async function (ids) {
  const [employee, employeesProjects, exWorks, educations] = await Promise.all([
    connection.query(`
    select * from employee as e
    inner join gender on e.id_gender = gender.gender_id
    inner join position on e.id_position = position.position_id
    inner join department on position.id_department = department.department_id
    inner join marital_status on e.id_marital_status = marital_status.marital_status_id
    inner join nationality on e.id_nationality = nationality.nationality_id
    ${ids?.length > 0 ? "WHERE e.employee_id in (:ids);" : ""}
    `, { ids }),
    connection.query(`
    select * from employee_project
    inner join project as p on p.project_id = employee_project.id_project
    inner join type_develop as tp on tp.type_develop_id = employee_project.id_type_develop
    ${ids?.length > 0 ? "WHERE employee_project.id_employee in (:ids);" : ""};
    `, { ids }),
    connection.query(`
    select * from ex_work
    ${ids?.length > 0 ? "WHERE ex_work.id_employee in (:ids);" : ""}
    `, { ids }),
    connection.query(`
    select * from education
    inner join specialty as s on s.specialty_id = education.id_specialty
    inner join form_education as fe on fe.form_education_id = education.id_form_education
    inner join view_education as ve on ve.view_education_id = education.id_view
    ${ids?.length > 0 ? "WHERE education.id_employee in (:ids);" : ""}
    `, { ids })
  ]);
  return {
    employee: employee[0],
    employeesProjects: employeesProjects[0],
    exWorks: exWorks[0],
    educations: educations[0],
  }
}

exports.getInformation = async function (ids, queryFieldsString, includeQueryString) {
  const parsedQueryFieldsString = parseQueryFieldsString(queryFieldsString);
  const parsedIncludeQueryString = parseQueryIncludeString(includeQueryString);
  const resultRows = (await connection.query(`SELECT ${parsedQueryFieldsString.length > 0 ? parsedQueryFieldsString : "*"} ${parsedIncludeQueryString.fields.length > 0 && parsedQueryFieldsString.length > 0
    ? parsedIncludeQueryString.fields.join(",")
    : ""
    } FROM employee
  ${parsedIncludeQueryString.joins.join("\n")}
  ${ids?.length > 0 ? "WHERE employee.employee_id in (:ids);" : ""}
  `, { ids }))[0];
  return resultRows;
}