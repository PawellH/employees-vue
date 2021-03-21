<template>
  <div id="employee-page" v-if="employee || isNew">
    <div class="fixedPath">
      <Header
        :person="{
          id: employee ? employee.employee_id : '',
          lastname: employee ? employee.lastname : '',
          first_name: employee ? employee.first_name : '',
          middle_name: employee ? employee.middle_name : ''
        }"
      />
    </div>
    <form action="" ref="employeeRef">
      <div id="container-buttons" class="fixedPath">
        <button type="submit" id="saveBtn" v-if="!isNew" @click.prevent="handleSave()">Сохранить</button>
        <button type="submit" id="deleteBtn" v-if="!isNew">Удалить</button>
        <button type="submit" id="addBtn" v-if="isNew">Добавить</button>
      </div>
      <div id="edata-container">
        <div class="edata-item">
          <div class="edata-item__headInfo">
            <span>Общая информация</span>
          </div>
          <div class="edata-item__content">
            <div id="edata-item__photo">
              <img :src="photo" alt="ephoto" />
              <input type="file" id="input_file" ref="newPhotoRef" @change="handleNewPhotoUpload()"/>
              <label for="input_file">Загрузить фото</label>
            </div>
            <div class="edata-item__inputs">
              <div>
                <label>№</label>
                <input type="text" name="employee_id" placeholder="1" :value="employee ? employee.employee_id : ''" />
              </div>
              <div>
                <label>фамилия</label>
                <input
                  type="text"
                  placeholder="Иванов"
                  name="employee[lastname]"
                  :value="employee ? employee.lastname : ''"
                >
              </div>
              <div>
                <label>имя</label>
                <input
                  type="text"
                  placeholder="Иван"
                  name="employee[first_name]"
                  :value="employee ? employee.first_name : ''"
                />
              </div>
              <div>
                <label>отчество</label>
                <input
                  type="text"
                  placeholder="Иванович"
                  name="employee[middle_name]"
                  :value="employee ? employee.middle_name : ''"
                />
              </div>
              <div>
                <label>пол</label>
                <select name="employee[sex]">
                  <option value="мужской">мужской</option>
                  <option value="женский">женский</option>
                </select>
              </div>
              <div>
                <label>дата рождения</label>
                <input
                  type="text"
                  placeholder="26.06.2001"
                  name="employee[date_birth]"
                  :value="employee ? formatDate(new Date(`${employee.date_birth}`)) : ''"
                />
              </div>
              <div>
                <label>национальность</label>
                <input type="text" placeholder="Беларусь" name="nationality_name" :value="employee ? employee.nationality_name : ''"/>
              </div>
              <div>
                <label>место рождения</label>
                <input
                  type="text"
                  placeholder="Минск"
                  name="employee[place_birth]"
                  :value="employee ? employee.place_birth : ''"
                />
              </div>
              <div>
                <label>семейное положение</label>
                <input name="employee[martial_status_name]" type="text" placeholder="не женат" :value="employee ? employee.marital_status_name : ''"/>
              </div>
            </div>
          </div>
        </div>
        <div class="edata-items" id="edata-items2">
          <div class="edata-item">
            <div class="edata-item__headInfo">
              <span>Сотрудник</span>
            </div>
            <div class="edata-item__content">
              <div class="edata-item__inputs">
                <div>
                  <label>должность</label>
                  <input type="text" placeholder="fullstack developer" name="employee[position_name]" :value="employee ? employee.position_name : ''"/>
                </div>
                <div>
                  <label>отдел</label>
                  <input type="text" placeholder="IT" name="employee[department_name]" :value="employee ? employee.department_name : ''"/>
                </div>
                <div>
                  <label>дата присоединения</label>
                  <input type="text" placeholder="04.05.2014" name="employee[date_receipt]" :value="employee ? formatDate(new Date(employee.date_receipt)) : ''"/>
                </div>
                <div>
                  <label>дата увольнения</label>
                  <input type="text" placeholder="..." name="employee[date_dismissal]" :value="employee ? formatDate(new Date(employee.date_dismissal)) : ''"/>
                </div>
              </div>
            </div>
          </div>
          <div class="edata-item" id="edata-item3">
            <div class="edata-item__headInfo">
              <span>Контакты</span>
            </div>
            <div class="edata-item__content">
              <div class="edata-item__inputs">
                <div>
                  <label>телефон</label>
                  <input
                    type="text"
                    placeholder="+375291111111"
                    name="employee[phone]"
                    :value="employee ? employee.phone : ''"
                  />
                </div>
                <div>
                  <label>email</label>
                  <input
                    type="text"
                    placeholder="pavel@gmail.com"
                    name="employee[email]"
                    :value="employee ? employee.email : ''"
                  />
                </div>
                <div>
                  <label>адрес</label>
                  <input
                    type="text"
                    placeholder="г. Минск, ул. Громова 89, кв. 12"
                    name="employee[address]"
                    :value="employee ? employee.address : ''"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="edata-item" id="edata-item4">
            <div class="edata-item__headInfo">
              <div class="arrow arrow-left"></div>
              <span>Проект</span>
              <div class="arrow arrow-right"></div>
            </div>
            <div class="edata-item__content">
              <div
                class="edata-item__inputs"
                v-for="employeeProject in employeesProjects"
                :key="employeeProject.employee_project_id"
              >
                <div>
                  <label>название</label>
                  <input type="text" name="project[project_name]" placeholder="plugnet" :value="employee ? employeeProject.project_name : ''" />
                </div>
                <div>
                  <label>заказчик</label>
                  <input type="text" name="project[customer]" placeholder="ecompani" :value="employee ? employeeProject.customer : ''" />
                </div>
                <div>
                  <label>работа</label>
                  <input type="text" name="project[type_develop_name]" placeholder="frontend" :value="employee ? employeeProject.type_develop_name : ''" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="edata-items">
          <div class="edata-item">
            <div class="edata-item__headInfo">
              <div class="arrow arrow-left"></div>
              <span>Опыт</span>
              <div class="arrow arrow-right"></div>
            </div>
            <div class="edata-item__content">
              <div class="edata-item__inputs" v-for="exWork in exWorks" :key="exWork.ex_work_id">
                <div>
                  <label>имя компании</label>
                  <input type="text" placeholder="esoft" name="exwork[organisation]" :value="exWork ? exWork.organisation : ''"/>
                </div>
                <div>
                  <label>должность</label>
                  <input type="text" placeholder="full stack" name="exwork[position]" :value="exWork ? exWork.position : ''"/>
                </div>
                <div>
                  <label>дата присоединения</label>
                  <input
                    type="text"
                    placeholder="20.11.2012"
                    name="exwork[date_receipt]"
                    :value="exWork ? formatDate(new Date(exWork.data_receipt)) : ''"
                  />
                </div>
                <div>
                  <label>дата увольнения</label>
                  <input
                    type="text"
                    placeholder="20.11.2013"
                    :value="exWork ? formatDate(new Date(exWork.data_dismissal)) : ''"
                  />
                </div>
                <div>
                  <label>причина увольнения</label>
                  <input name="exwork[reason_dismissal]" type="text" placeholder="истечение конкракта" :value="exWork ? exWork.reason_dismissal : ''"/>
                </div>
              </div>
            </div>
          </div>
          <div class="edataf-item" id="edata-item6">
            <div class="edata-item__headInfo">
              <div class="arrow arrow-left"></div>
              <span>Образование</span>
              <div class="arrow arrow-right"></div>
            </div>
            <div class="edata-item__content">
              <div class="edata-item__inputs" v-for="education in educations" :key="education.education_id">
                <div>
                  <label>вид</label>
                  <input name="education[view_education_name]" type="text" placeholder="высшее" :value="education ? education.view_education_name : ''"/>
                </div>
                <div>
                  <label>учреждение</label>
                  <input name="education[name_institution]" type="text" placeholder="БГУИР" :value="education ? education.name_institution : ''"/>
                </div>
                <div>
                  <label>специальность</label>
                  <input name="education[specialty_name]" type="text" placeholder="техник-программист" :value="education ? education.specialty_name : ''"/>
                </div>
                <div>
                  <label>квалификация</label>
                  <input name="education[rank]" type="text" placeholder="6" :value="education ? education.rank : ''"/>
                </div>
                <div>
                  <label>форма</label>
                  <input name="education[form_education_name]" type="text" placeholder="заочная" :value="education ? education.form_education_name : ''"/>
                </div>
                <div>
                  <label>диплом</label>
                  <input type="text" name="education[number_diploma]" placeholder="№1233456452" :value="education ? education.number_diploma : ''"/>
                </div>
                <div>
                  <label>дата начала</label>
                  <input type="text" name="education[date_receipt]" placeholder="01.09.2010" :value="education ? formatDate(new Date(education.date_receipt)) : ''"/>
                </div>
                <div>
                  <label>дата завершения</label>
                  <input type="text" name="education[date_expiration]" placeholder="01.07.2014" :value="education ? formatDate(new Date(education.date_expiration)) : ''"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import httpClient from "../helpers/httpClient";

export default {
  components: {
    Header,
  },
  data() {
    return {
      employee: null,
      employeesProjects: [{}],
      photo: "",
      exWorks: [{}],
      educations: [{}],
      isNew: false,
    };
  },
  async created() {
    const employeeId = this.$route.params.id;
    this.isNew = employeeId === "new";
    if (!this.isNew) {
      const employeeInformation = await this.getAllEmployeeInformation(employeeId);
      [this.employee] = employeeInformation.employee;
      this.employeesProjects = employeeInformation.employeesProjects;
      this.exWorks = employeeInformation.exWorks;
      this.educations = employeeInformation.educations;
      if (!this.photo) {
        this.photo = `${process.env.VUE_APP_API_URL}/ephoto-${this.employee.employee_id}`;
      }
    }
  },
  methods: {
    async getAllEmployeeInformation(employeeId) {
      const employeeResponse = await httpClient.get(`/employees?id=${employeeId}&include=all`);
      return employeeResponse.status === 200 ? employeeResponse.data : null;
    },
    handleNewPhotoUpload() {
      const newPhoto = this.$refs.newPhotoRef.files[0];
      const newPhotoFormData = new FormData();
      newPhotoFormData.append("photo", newPhoto);
      // httpClient.post(`/employees/${this.employee.employee_id}/photo`, newPhotoFormData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      this.photo = URL.createObjectURL(newPhoto);
    },
    handleSave() {
      const employeeFormData = new FormData(this.$refs.employeeRef);
      httpClient.put(`/employees/${this.employee.employee_id}`, employeeFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    formatDate(date) {
      return new Intl.DateTimeFormat(
        "en",
        { year: "numeric", month: "2-digit", day: "2-digit" },
      ).format(date);
    },
  },
};
</script>

<style scoped>
*,
::after,
::before {
  box-sizing: border-box;
}

.fixedPath {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
}
/* buttons */
#container-buttons {
  top: 45px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffffbe;
}
#container-buttons button {
  height: 32px;
  border: solid 2px black;
  font-size: 16px;
  color: white;
  cursor: pointer;
  outline: none;
}
#container-buttons :not(:last-child) {
  margin-right: 20px;
}
#saveBtn,
#addBtn {
  background-color: #0c6136;
}
#saveBtn:hover,
#addBtn:hover {
  background-color: #739419;
}
#saveBtn:active,
#addBtn:active {
  background-color: rgb(0, 88, 221);
}
#deleteBtn {
  background-color: #d31414;
}
#deleteBtn:hover {
  background-color: #f74141;
}
#deleteBtn:active {
  background-color: #852905;
}

/* edata-item */
#edata-container {
  padding-top: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.edata-item {
  width: 420px;
  margin: 20px 40px;
  margin-top: 0px;
}
#edata-container > div:first-child {
  margin-left: 20px;
}
.edata-items {
  margin: 20px 40px;
  margin-top: 0px;
}
.edata-items > div {
  margin: 0px;
}
#edata-item3 {
  margin-top: 55px;
}
#edata-item4 {
  margin-top: 55.2px;
}
#edata-item6 {
  margin-top: 92px;
}

.edata-item__headInfo {
  width: 100%;
  padding: 10px 0px;
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: #0e0e64;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow {
  width: 10px;
  height: 10px;
  margin: 0px 10px;
  border-top: 3px solid #6098cc;
  border-right: 3px solid #6098cc;
}
.arrow:hover {
  border-color: aquamarine;
}
.arrow:active {
  border-color: lime;
}
.arrow-right {
  transform: rotate(45deg);
}
.arrow-left {
  transform: rotate(-135deg);
}

.edata-item__content {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #0e0e64;
  border-top: none;
  background-color: #f5f5f5;
}

/* img */
#edata-item__photo {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#edata-item__photo > img {
  height: 200px;
  width: 200px;
  object-fit: cover;
  display: block;
  border: solid 1px #071f42;
  border-radius: 10px;
}
#edata-item__photo > input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
#edata-item__photo > label {
  padding: 3px 0px;
  margin-top: 5px;
  width: 200px;
  font-size: 14px;
  background-color: #1b7179;
  color: #f5f5f5;
  border: 2px solid #143033;
  border-radius: 5px;
}
#edata-item__photo > label:hover {
  background-color: #1f8a94;
}
#edata-item__photo > label:active {
  background-color: #074b52;
}

/* input */
.edata-item__inputs {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
}
.edata-item__inputs > div {
  padding-bottom: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.edata-item__inputs label {
  font-size: 14px;
  position: relative;
  top: 3px;
}
.edata-item__inputs input,
.edata-item__inputs select {
  width: 220px;
  margin-left: auto;
  font-size: 14px;
  border: 2px solid #143033;
}
/* media queries */
@media (max-width: 1496px) {
  .edata-item,
  .edata-items {
    margin: 20px 20px;
    margin-top: 0px;
  }
}
@media (max-width: 1396px) {
  .edata-item,
  .edata-items {
    margin: 15px 15px;
    margin-top: 0px;
  }
}
@media (max-width: 1376px) {
  .edata-item,
  .edata-items {
    margin: 10px 10px;
    margin-top: 0px;
  }
}
@media (max-width: 1346px) {
  .edata-item,
  .edata-items {
    margin: 5px 5px;
    margin-top: 0px;
  }
}
@media (max-width: 1321px) {
  #edata-container {
    justify-content: center;
    align-items: center;
  }
  .edata-item,
  .edata-items {
    margin: 5px 50px;
    margin-top: 0px;
  }
  #edata-container > :last-child {
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  #edata-item6 {
    margin-top: 0px;
    margin-left: 100px;
  }
}
@media (max-width: 1010px) {
  .edata-item,
  .edata-items {
    margin: 5px 20px;
  }
  #edata-item6 {
    margin-left: 40px;
  }
}
@media (max-width: 921px) {
  .edata-item__inputs > div {
    flex-direction: column;
  }
  .edata-item__inputs label {
    position: relative;
    top: 0px;
    left: 3px;
  }
  .edata-item__inputs input,
  .edata-item__inputs select {
    margin: 0 auto;
  }
  .edata-item {
    width: 260px;
  }
}
@media (max-width: 601px) {
  #edata-container {
    align-items: flex-start;
    justify-content: flex-start;
  }
  .edata-item {
    width: 420px;
  }
  .edata-item__inputs > div {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .edata-item__inputs label {
    position: relative;
    top: 3px;
    left: 0px;
  }
  .edata-item__inputs input,
  .edata-item__inputs select {
    margin: 0;
    margin-left: auto;
  }
  .edata-item,
  .edata-items {
    margin: 0px 20px;
    margin-top: 10px;
  }
  #edata-container > :last-child {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  #edata-item6 {
    margin-left: 0px;
  }
  #edata-item3,
  #edata-item4,
  #edata-item6,
  #edata-container {
    margin-top: 10px;
  }
}
@media (max-width: 460px) {
  .edata-item__inputs > div {
    flex-direction: column;
  }
  .edata-item__inputs label {
    position: relative;
    top: 0px;
    left: 3px;
  }
  .edata-item__inputs input,
  .edata-item__inputs select {
    margin: 0 auto;
  }
  .edata-item {
    width: 260px;
  }
}
</style>
