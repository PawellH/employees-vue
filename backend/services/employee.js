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
    date_receipt: "employee.date_receipt",
    date_dismissal: "employee.date_dismissal",
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
  }, { fields: [], joins: []});
  return parsed;
}

exports.getFullInformation = async function(ids) {
  const [employee, teams, exWorks, educations] = await Promise.all([
    connection.query(`
    select * from employee as e
    inner join gender on e.id_gender = gender.gender_id
    inner join position on e.id_position = position.position_id
    inner join marital_status on e.id_marital_status = marital_status.marital_status_id
    inner join nationality on e.id_nationality = nationality.nationality_id
    where e.employee_id in (:ids);
    `, { ids }),
    connection.query(`
    select * from team
    inner join project as p on p.project_id = team.id_project
    inner join type_develop as tp on tp.type_develop_id = team.id_type_develop
    where team.id_employee in (:ids);
    `, { ids }),
    connection.query(`
    select * from ex_work
    where ex_work.id_employee in (:ids);
    `, { ids }),
    connection.query(`
    select * from education
    inner join specialty as s on s.specialty_id = education.id_specialty
    inner join form_education as fe on fe.form_education_id = education.id_form_education
    where education.id_employee in (:ids);
    `, { ids })
  ]);
  return {
    employee: employee[0],
    teams: teams[0],
    exWorks: exWorks[0],
    educations: educations[0],
  }
}

exports.getInformation = async function(ids, queryFieldsString, includeQueryString) {
  const parsedQueryFieldsString = parseQueryFieldsString(queryFieldsString);
  const parsedIncludeQueryString = parseQueryIncludeString(includeQueryString);
  const resultRows = (await connection.query(`SELECT ${parsedQueryFieldsString.length > 0 ? parsedQueryFieldsString : "*"} ${
    parsedIncludeQueryString.fields.length > 0 && parsedQueryFieldsString.length > 0
      ? parsedIncludeQueryString.fields.join(",")
      : ""
  } FROM employee
  ${parsedIncludeQueryString.joins.join("\n")}
  ${id ? "WHERE employee.employee_id in (:ids);": ""}
  `, { ids }))[0];
  return resultRows;
}