<template>
<div id="index">
  <div id="fixedPath">
    <Header/>
    <form id="container-buttons">
      <router-link id="addEmployeeBtn" to="/epage" tag="button">Добавить</router-link>
      <div>
        <select v-model="search.type">
        <option value="employee_id">№</option>
        <option value="lastname">Фамилия</option>
        <option value="position_name">Должность</option>
        </select>
        <input type="text" placeholder="Поиск..." v-model="search.value">
        <button id="searchEmployeeBtn" @click.prevent="makeSearch()">
          <img src="/images/loupe.png" alt="loupe" id="loupe_img">
        </button>
      </div>
    </form>
  </div>
  <div id="container-employees" v-if="employees">
    <EmployeeItem
      v-for="empl in employees"
      :key="empl.employee_id"
      :id="empl.employee_id"
      :lastname="empl.lastname"
      :first_name="empl.first_name"
      :middle_name="empl.middle_name"
      :position="empl.position_name"
      :photo="empl.photo"
      v-show="empl.shouldShow"
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
      const employeeResponse = await httpClient.get("/employees?include=position");
      const employeesData = employeeResponse.status === 200 ? employeeResponse.data : [];
      const employees = employeesData.map((employeeData) => {
        return {
          ...employeeData,
          shouldShow: true,
        };
      });
      return employees;
    },
    makeSearch() {
      if (!this.search.type || !this.search.value) {
        return;
      }
      const result2 = this.employees.map((employee) => {
        const result = employee[this.search.type]?.toString()
          .toLowerCase()
          .startsWith(this.search.value.toLowerCase());
        return {
          ...employee,
          shouldShow: result,
        };
      });
      this.employees = result2;
    },
  },
  data() {
    return {
      employees: null,
      search: { value: "", type: "employee_id" },
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
