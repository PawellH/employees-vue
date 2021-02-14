<template>
  <div id="employee">
    <div id="employee__lineTop"></div>
    <div id="employee__main">
      <img src="/images/user1photo.png" alt="photo" id="employee_img">
      <div id="employee_info">
        <span>№34545645</span>
        <span>Гончаров</span>
        <span>Павел</span>
        <span>Владимирович</span>
        <span>fullstack developer</span>
      </div>
    </div>
    <div id="employee__lineBottom"></div>
  </div>
</template>

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
  height: 100%;
  display: block;
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
