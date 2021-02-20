<template>
<div id="index">
  <div id="fixedPath">
    <Header/>
    <form id="container-buttons">
      <router-link id="addEmployeeBtn" to="/epage" tag="button">Добавить</router-link>
      <select>
        <option value="№">№</option>
        <option value="Фамилия">Фамилия</option>
        <option value="Должность">Должность</option>
      </select>
      <input type="text" placeholder="Поиск...">
      <button id="searchEmployeeBtn">
        <img src="/images/loupe.png" alt="loupe" id="loupe_img">
      </button>
    </form>
  </div>
  <div id="container-employees">
    <EmployeeItem
      v-for="employee in employees"
      :key="employee.id"
      :id="employee.id"
      :lastname="employee.lastname"
      :first_name="employee.first_name"
      :middle_name="employee.middle_name"
      :position="employee.position"
      :photo="employee.photo"
      :link="employee.link"
    />
  </div>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import EmployeeItem from "../components/EmployeeItem.vue";

export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          lastname: "Гончаров",
          first_name: "Павел",
          middle_name: "Владимирович",
          position: "frontend developer",
          photo: "/images/user1photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
        {
          id: 2,
          lastname: "Высоцкий",
          first_name: "Илья",
          middle_name: "Михайлович",
          position: "backend developer",
          photo: "/images/employee2Photo.png",
          link: "/epage",
        },
      ],
    };
  },
  components: {
    Header, EmployeeItem,
  },
};
</script>
<style scoped>
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
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffffbe;
}
#container-buttons select {
  width: 100px;
  height: 32px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
}
#container-buttons input{
  width: 200px;
  height: 26px;
  font-size: 16px;
  padding-left: 5px;
  border: 2px solid #143033;
  border-right: none;
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
#loupe_img{
  width: 20px;
  height: 20px;
  position: relative;
  top:2px;
}
</style>
