<template>
  <router-link id="employee" to="/" tag="div">
    <div id="employee__lineTop"></div>
    <div id="employee__main">
      <div id="employee_img" :style="{'background-image': `url('')`}" ></div>
      <div id="employee_info">
        <span>#{{id}}</span>
        <span>{{lastname}}</span>
        <span>{{first_name}}</span>
        <span>{{middle_name}}</span>
        <!-- <span>{{position}}</span> -->
      </div>
    </div>
    <div id="employee__lineBottom"></div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: Number,
    lastname: String,
    first_name: String,
    middle_name: String,
    // position: String,
    // photo: String,
    // link: String,
  },
};
</script>
<style scoped>
#employee{
  width: 280px;
  font-size: 15px;
  background-color: #f5f5f5;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#employee__lineTop{
  background-color: #0e0e64;
  width: 276px;
  height: 15px;
  border: 2px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
}

#employee__main{
  width: 246px;
  padding: 15px 15px;
  border: 2px solid black;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#employee_img{
  width: 80px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: solid 1px #0e0e64;
}
#employee_info{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
}
#employee_info > span:first-child{
  padding-bottom: 5px;
}
#employee_info > span:last-child{
  padding-top: 5px;
}

#employee__lineBottom{
  width: 276px;
  height: 5px;
  border: 2px solid black;
  background-color: #0e0e64;
}
</style>
