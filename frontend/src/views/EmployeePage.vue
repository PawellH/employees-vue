<template>
<div id="employee-page" v-if="employee">
  <div id="fixedPath">
    <Header
      :person="{ id: employee.employee_id, lastname: employee.lastname, first_name: employee.first_name, middle_name: employee.middle_name}"
    />
    <form id="container-buttons">
      <button type="submit" id="saveBtn">Сохранить</button>
      <button type="submit" id="deleteBtn">Удалить</button>
    </form>
  </div>
  <div id="edata-container">
    <div class="edata-item">
      <div class="edata-item__headInfo">
        <span>Общая информация</span>
      </div>
      <div class="edata-item__content">
        <div id="edata-item__photo">
          <img src="/images/user1photo.png" alt="ephoto">
          <button type="submit">Загрузить фото</button>
        </div>
        <div class="edata-item__inputs">
          <div>
            <label>№</label>
            <input type="text" placeholder="1">
          </div>
          <div>
            <label>фамилия</label>
            <input type="text" placeholder="Иванов">
          </div>
          <div>
            <label>имя</label>
            <input type="text" placeholder="Иван">
          </div>
          <div>
            <label>отчество</label>
            <input type="text" placeholder="Иванович">
          </div>
          <div>
            <label>пол</label>
            <select>
              <option value="мужской">мужской</option>
              <option value="женский">женский</option>
            </select>
          </div>
          <div>
            <label>возраст</label>
            <input type="text" placeholder="19">
          </div>
          <div>
            <label>дата рождения</label>
            <input type="text" placeholder="26.06.2001">
          </div>
          <div>
            <label>национальность</label>
            <input type="text" placeholder="Беларусь">
          </div>
          <div>
            <label>место рождения</label>
            <input type="text" placeholder="Минск">
          </div>
          <div>
            <label>семейное положение</label>
            <input type="text" placeholder="не женат">
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
              <input type="text" placeholder="fullstack developer">
            </div>
            <div>
              <label>отдел</label>
              <input type="text" placeholder="IT">
            </div>
            <div>
              <label>дата присоединения</label>
              <input type="text" placeholder="04.05.2014">
            </div>
            <div>
              <label>дата увольнения</label>
              <input type="text" placeholder="...">
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
              <input type="text" placeholder="+375291111111">
            </div>
            <div>
              <label>email</label>
              <input type="text" placeholder="pavel@gmail.com">
            </div>
            <div>
              <label>адрес</label>
              <input type="text" placeholder="г. Минск, ул. Громова 89, кв. 12">
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
          <div class="edata-item__inputs">
            <div>
              <label>название</label>
              <input type="text" placeholder="plugnet">
            </div>
            <div>
              <label>заказчик</label>
              <input type="text" placeholder="ecompani">
            </div>
            <div>
              <label>работа</label>
              <input type="text" placeholder="frontend">
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
          <div class="edata-item__inputs">
            <div>
              <label>имя компании</label>
              <input type="text" placeholder="esoft">
            </div>
            <div>
              <label>должность</label>
              <input type="text" placeholder="full stack">
            </div>
            <div>
              <label>дата присоединения</label>
              <input type="text" placeholder="20.11.2012">
            </div>
            <div>
              <label>дата увольнения</label>
              <input type="text" placeholder="20.11.2013">
            </div>
            <div>
              <label>причина увольнения</label>
              <input type="text" placeholder="истечение конкракта">
            </div>
          </div>
        </div>
      </div>
      <div class="edata-item"  id="edata-item6">
        <div class="edata-item__headInfo">
          <div class="arrow arrow-left"></div>
          <span>Образование</span>
          <div class="arrow arrow-right"></div>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <div>
              <label>вид</label>
              <input type="text" placeholder="высшее">
            </div>
            <div>
              <label>учреждение</label>
              <input type="text" placeholder="БГУИР">
            </div>
            <div>
              <label>специальность</label>
              <input type="text" placeholder="техник-программист">
            </div>
            <div>
              <label>квалификация</label>
              <input type="text" placeholder="6">
            </div>
            <div>
              <label>форма</label>
              <input type="text" placeholder="заочная">
            </div>
            <div>
              <label>диплом</label>
              <input type="text" placeholder="№1233456452">
            </div>
            <div>
              <label>дата начала</label>
              <input type="text" placeholder="01.09.2010">
            </div>
            <div>
              <label>дата завершения</label>
              <input type="text" placeholder="01.07.2014">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      isNew: false,
    };
  },
  async created() {
    const employeeId = this.$route.params.id;
    this.isNew = !employeeId;
    if (!this.isNew) {
      const result = await this.getEmployee(employeeId);
      this.employee = result;
    }
  },
  methods: {
    async getEmployee(employeeId) {
      const employeeResponse = await httpClient.get(`/employees?id=${employeeId}`);
      debugger;
      return employeeResponse.status === 200 ? employeeResponse.data[0] : null;
    },
  },
};
</script>

<style scoped>
*, ::after, ::before {
  box-sizing: border-box;
}

#fixedPath{
  position: fixed;
  width: 100%;
  z-index: 1;
}
/* buttons */
#container-buttons{
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
}
#container-buttons :not(:last-child) {
  margin-right: 20px;
}
#saveBtn{
  background-color: #0c6136;
}
#deleteBtn{
  background-color: #d31414;
}

/* edata-item */
#edata-container{
  padding-top: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.edata-item{
  width: 420px;
  margin: 20px 40px;
}
#edata-container > div:first-child{
  margin-left: 20px;
}
.edata-items{
  margin: 20px 40px;
}
.edata-items > div{
  margin: 0px;
}
#edata-item3{
  margin-top: 55px;
}
#edata-item4{
  margin-top: 55.2px;
}
#edata-item6{
  margin-top: 92px;
}

.edata-item__headInfo{
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
.arrow-right {
  transform: rotate(45deg);
}
.arrow-left {
  transform: rotate(-135deg);
}

.edata-item__content{
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #0e0e64;
  border-top: none;
  background-color: #f5f5f5;
}

/* img */
#edata-item__photo{
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#edata-item__photo > img{
  height: 200px;
  width: 200px;
  object-fit: cover;
  display: block;
  border: solid 1px #071f42;
  border-radius: 10px;
}
#edata-item__photo > button {
  padding: 3px 0px;
  margin-top: 5px;
  width: 200px;
  font-size: 14px;
  background-color: #1b7179;
  color: #f5f5f5;
  border: 2px solid #143033;
  border-radius: 5px;
}

/* input */
.edata-item__inputs{
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
}
.edata-item__inputs > div{
  padding-bottom: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.edata-item__inputs label {
  font-size: 14px;
  position: relative;
  top:3px;
}
.edata-item__inputs input,
.edata-item__inputs select {
  width: 220px;
  margin-left: auto;
  font-size: 14px;
  border: 2px solid #143033;
}
</style>
