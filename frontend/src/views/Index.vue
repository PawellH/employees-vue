<template>
<div id="index">
  <div id="fixedPath">
    <Header/>
    <form id="container-buttons">
      <router-link id="addEmployeeBtn" to="/epage" tag="button">Добавить</router-link>
      <div>
        <select>
        <option value="№">№</option>
        <option value="Фамилия">Фамилия</option>
        <option value="Должность">Должность</option>
        </select>
        <input type="text" placeholder="Поиск...">
        <button id="searchEmployeeBtn">
          <img src="/images/loupe.png" alt="loupe" id="loupe_img">
        </button>
      </div>
    </form>
  </div>
  <div id="container-employees" v-if="employees">
    <EmployeeItem
      v-for="empl in employees"
      :key="empl.id"
      :id="empl.id"
      :lastname="empl.lastname"
      :first_name="empl.first_name"
      :middle_name="empl.middle_name"
    />
  </div>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import EmployeeItem from "../components/EmployeeItem.vue";
import httpClient from "../helpers/httpClient";

export default {
  async created() {
    this.employees = await this.getEmployees();
  },
  methods: {
    async getEmployees() {
      const employeeResponse = await httpClient.get("/employees");
      return employeeResponse.status === 200 ? employeeResponse.data : null;
    },
  },
  data() {
    return {
      employees: null,
      // employees: [
      //   {
      //     id: 1,
      //     lastname: "Гончаров",
      //     first_name: "Павел",
      //     middle_name: "Владимирович",
      //     position: "frontend developer",
      //     photo: "/images/user1photo.png",
      //     link: "/epage",
      //   },
      //   {
      //     id: 2,
      //     lastname: "Высоцкий",
      //     first_name: "Илья",
      //     middle_name: "Михайлович",
      //     position: "backend developer",
      //     photo: "/images/employee2Photo.png",
      //     link: "/epage",
      //   },
      // ],
    };
  },
  components: {
    Header, EmployeeItem,
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
#container-employees{
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
  padding-top: 95px;
}

#container-buttons{
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #ffffffbe;
}
#container-buttons select {
  width: 100px;
  height: 32px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
  position: relative;
  bottom: 2px;
}
#container-buttons input{
  width: 200px;
  height: 32px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
  position: relative;
  bottom: 2.5px;
}
#container-buttons button {
  height: 32px;
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
#loupe_img {
  width: 20px;
  height: 20px;
  position: relative;
  top:2px;
}

/* media queries */
@media (max-width:491px){
  #container-buttons{
    justify-content: center;
  }
  #container-buttons > div:last-child{
    padding-top: 5px;
  }
  #container-employees{
    padding-top: 130px;
  }
}
@media (max-width:384px){
  #container-buttons{
    padding: 10px 5px;
  }
  #container-buttons input{
    width: 150px;
  }
}
</style>
