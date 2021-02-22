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
  <div id="employee-data">
    <div id="employee-data__general" class="edata-item">
      <label>Общая информация</label>
      <div id="employee-data__photo">
        <img src="/images/user1photo.png" alt="userphoto" id="emplyee-img">
        <button type="submit">Загрузить фото</button>
      </div>
      <div>
        <label>№:</label>
        <input type="text" placeholder="1">
      </div>
      <div>
        <label>Фамилия:</label>
        <input type="text" placeholder="Иванов">
      </div>
      <div>
        <label>Имя:</label>
        <input type="text" placeholder="Иван">
      </div>
      <div>
        <label>Отчество:</label>
        <input type="text" placeholder="Иванович">
      </div>
      <div>
        <label>Пол:</label>
        <select>
          <option value="мужской">мужской</option>
          <option value="женский">женский</option>
        </select>
      </div>
      <div>
        <label>Возраст:</label>
        <input type="text" placeholder="19">
      </div>
      <div>
        <label>Дата рождения:</label>
        <input type="text" placeholder="26.06.2001">
      </div>
      <div>
        <label>Национальность:</label>
        <input type="text" placeholder="Беларусь">
      </div>
      <div>
        <label>Место рождения</label>
        <input type="text" placeholder="Минск">
      </div>
      <div>
        <label>семейное положение:</label>
        <input type="text" placeholder="не женат">
      </div>
    </div>
      <div class="edata-item">
        <label>Сотрудник</label>
        <label>должность:</label>
        <input type="text" placeholder="fullstack developer">
        <label>отдел</label>
        <input type="text" placeholder="IT">
        <label>дата присоединения:</label>
        <input type="text" placeholder="04.05.2014">
        <label>дата увольнения:</label>
        <input type="text" placeholder="...">
      </div>
      <div class="edata-item">
        <label>Контакты</label>
        <label>Телефон:</label>
        <input type="text" placeholder="+375291111111">
        <label>Email:</label>
        <input type="text" placeholder="pavel@gmail.com">
        <label>Адрес:</label>
        <input type="text" placeholder="г. Минск, ул. Громова 89, кв. 12">
      </div>
      <div class="edata-item">
        <label>Проект</label>
        <label>название:</label>
        <input type="text" placeholder="plugnet">
        <label>заказчик:</label>
        <input type="text" placeholder="ecompani">
        <label>работа:</label>
        <input type="text" placeholder="frontend">
      </div>
      <div class="edata-item">
        <label>Опыт</label>
        <label>имя компании:</label>
        <input type="text" placeholder="esoft">
        <label>должность:</label>
        <input type="text" placeholder="full stack">
        <label>дата присоединения:</label>
        <input type="text" placeholder="20.11.2012">
        <label>дата увольнения:</label>
        <input type="text" placeholder="20.11.2013">
        <label>причина увольнения:</label>
        <input type="text" placeholder="истечение конкракта">
      </div>
      <div class="edata-item">
        <label>Образование</label>
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
    this.employee = await this.getEmployee();
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
#fixedPath{
  position: fixed;
  width: 100%;
  z-index: 1;
}

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
/* employee */
#employee{
  padding: 10px 10px;
  font-size: 30px;
  background-color: #f5f5f5;
  border: 3px solid #0e0e64;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
#employee :not(:first-child),
#employee :not(:last-child)
{
  margin-left: 7px;
}

/* edata-item */
#employee-data{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 20px;
  padding-top: 100px;
}
#employee-data > :not(:last-child){
  margin-bottom: 20px;
}
#employee-data :not(:first-child),
#employee-data :not(:last-child){
  margin-right: 20px;
}
.edata-item{
  padding: 10px 10px;
  background-color: #f5f5f5;
  border: 3px solid #0e0e64;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

/*#employee-data__general */
#emplyee-img{
  height: 200px;
  width: 200px;
  object-fit: cover;
  display: block;
  border: solid 1px #071f42;
  border-radius: 10px;
  background-color: rgb(70, 109, 180) ;
}

#employee-data select {
  width: 100px;
  height: 32px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
}
#employee-data input{
  width: 200px;
  height: 26px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
}
</style>
