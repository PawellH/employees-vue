<template>
<div id="employee-page">
  <Header/>
  <form id="container-buttons">
    <button type="submit" id="saveBtn">Сохранить</button>
    <button type="submit" id="deleteBtn">Удалить</button>
  </form>
  <div id="employee">
    <span>№1</span>
    <span>Гончаров</span>
    <span>Павел</span>
    <span>Владимирович</span>
    <span>fullstack developer</span>
  </div>
  <div id="employee-data">
    <div id="employee-data__general" class="edata-item">
      <label>Общая информация</label>
      <div id="employee-data__photo">
        <img src="/images/user1photo.png" alt="userphoto" id="emplyee-img">
        <button type="submit">Загрузить фото</button>
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
    </div>
</div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
#employee-page{
  padding-bottom: 10px;
}

#container-buttons{
  padding: 20px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
#container-buttons button {
  height: 36px;
  border: solid 2px black;
  font-size: 16px;
  color: white;
  cursor: pointer;
}
#container-buttons :not(:last-child) {
  margin-right: 20px;
}
#saveBtn{
  background-color: #4f0e6d;
}
#deleteBtn{
  background-color: #d31414;
}
/* employee */
#employee{
  margin: 0px 20px;
  margin-bottom: 20px;
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
  justify-content: center;
  padding: 0px 20px;
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
#employee-data__general{

}
.employee-data__photo{

}
#emplyee-img{
  height: 200px;
  width: 200px;
  object-fit: cover;
  display: block;
  border: solid 1px #071f42;
  border-radius: 10px;
  background-color: rgb(70, 109, 180) ;
}
</style>
