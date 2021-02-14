<template>
<div id="index">
    <Header/>
    <form id="container-buttons">
      <button type="submit" id="addEmployeeBtn">Добавить</button>
      <select>
        <option value="№">№</option>
        <option value="Фамилия">Фамилия</option>
        <option value="Имя">Имя</option>
        <option value="Отчество">Отчество</option>
        <option value="Должность">Должность</option>
      </select>
      <input type="text" placeholder="Поиск...">
      <button type="submit" id="searchEmployeeBtn">
        <img src="/images/loupe.png" alt="loupe" id="loupe_img">
      </button>
    </form>
    <div id="container-employees">
      <EmployeeItem/>
      <EmployeeItem/>
      <EmployeeItem/>
      <EmployeeItem/>
      <EmployeeItem/>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import EmployeeItem from '../components/EmployeeItem.vue';

export default {
  components: {
    Header, EmployeeItem,
  },
};
</script>
<style scoped>
#index{

}
#container-employees{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(304px, max-content));
  justify-content: center;
  padding: initial;
}

#container-buttons{
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#container-buttons select {
  width: 100px;
  height: 36px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
}
#container-buttons input{
  width: 200px;
  height: 30px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
}
#container-buttons button {
  height: 36px;
  border: solid 2px black;
  font-size: 16px;
  color: white;
  cursor: pointer;
}
#addEmployeeBtn {
  background-color: #1a8116;
  margin-right: 20px;
}
#searchEmployeeBtn {
  background-color: #126c7c;
  padding: 0px 10px;
}
#loupe_img{
  width: 20px;
  height: 20px;
  position: relative;
  top:2px;
}
</style>
