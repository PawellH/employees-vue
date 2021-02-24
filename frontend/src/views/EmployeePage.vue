<template>
<div id="employee-page" v-if="employee">
  <div id="fixedPath">
    <Header
      :person="{ id: employee.id, lastname: employee.lastname, first_name: employee.first_name, middle_name: employee.middle_name}"
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
          <span>Cотрудник</span>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <label>должность</label>
            <input type="text" placeholder="fullstack developer">
            <label>отдел</label>
            <input type="text" placeholder="IT">
            <label>дата присоединения</label>
            <input type="text" placeholder="04.05.2014">
            <label>дата увольнения</label>
            <input type="text" placeholder="...">
          </div>
        </div>
      </div>
      <div class="edata-item">
        <div class="edata-item__headInfo">
          <span>Контакты</span>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <label>телефон:</label>
            <input type="text" placeholder="+375291111111">
            <label>email:</label>
            <input type="text" placeholder="pavel@gmail.com">
            <label>адрес:</label>
            <input type="text" placeholder="г. Минск, ул. Громова 89, кв. 12">
          </div>
        </div>
      </div>
      <div class="edata-item">
        <div class="edata-item__headInfo">
          <span>Проект</span>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <label>название:</label>
            <input type="text" placeholder="plugnet">
            <label>заказчик:</label>
            <input type="text" placeholder="ecompani">
            <label>работа:</label>
            <input type="text" placeholder="frontend">
          </div>
        </div>
      </div>
    </div>
    <div class="edata-items">
      <div class="edata-item">
        <div class="edata-item__headInfo">
          <span>Опыт</span>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <label>имя компании</label>
            <input type="text" placeholder="esoft">
            <label>должность</label>
            <input type="text" placeholder="full stack">
            <label>дата присоединения</label>
            <input type="text" placeholder="20.11.2012">
            <label>дата увольнения</label>
            <input type="text" placeholder="20.11.2013">
            <label>причина увольнения</label>
            <input type="text" placeholder="истечение конкракта">
          </div>
        </div>
      </div>
      <div class="edata-item">
        <div class="edata-item__headInfo">
          <span>Образование</span>
        </div>
        <div class="edata-item__content">
          <div class="edata-item__inputs">
            <label>вид:</label>
            <input type="text" placeholder="высшее">
            <label>учреждение:</label>
            <input type="text" placeholder="БГУИР">
            <label>специальность:</label>
            <input type="text" placeholder="техник-программист">
            <label>квалификация:</label>
            <input type="text" placeholder="6">
            <label>форма:</label>
            <input type="text" placeholder="заочная">
            <label>диплом:</label>
            <input type="text" placeholder="№1233456452">
            <label>дата начала:</label>
            <input type="text" placeholder="01.09.2010">
            <label>дата завершения:</label>
            <input type="text" placeholder="01.07.2014">
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
    };
  },
  async created() {
    const result = await this.getEmployee();
    this.employee = result;
  },
  methods: {
    async getEmployee() {
      const employeeId = this.$route.params.id;
      const employeeResponse = await httpClient.get(`/employees?id=${employeeId}`);
      return employeeResponse.status === 200 ? employeeResponse.data[0] : null;
    },
  },
  // props: ["employees"],
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
  margin: 20px 20px;
}
.edata-items{
  margin: 20px 20px;
}
#edata-items2 > div:last-child > div:last-child{
  padding-bottom: 54px;
}
.edata-items > div{
  margin: 0px;
}

.edata-item__headInfo{
  width: 100%;
  padding: 10px 0px;
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: #0e0e64;
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
  height: 250px;
  width: 300px;
  object-fit: cover;
  display: block;
  border: solid 1px #071f42;
  border-radius: 10px;
  background-color: rgb(70, 109, 180) ;
}
#edata-item__photo > button {
  padding: 3px 0px;
  margin-top: 6px;
  width: 300px;
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
}
.edata-item__inputs input,
.edata-item__inputs select {
  width: 220px;
  margin-left: auto;
  font-size: 12px;
  border: 2px solid #143033;
}
</style>
