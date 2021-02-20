<template>
<div id="header">
    <router-link to="/" id="icoDiv">
      <img src="images/ico.png" alt="ico" id="icoImg">
      <h1>Employees</h1>
    </router-link>
</div>
</template>

<style scoped>
#header{
  background-color: rgb(8, 8, 58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#icoDiv{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#icoImg{
  width: 24px;
  height: 24px;
  padding-left:20px;
  padding-right: 10px;
}
h1{
  font-size: 18px;
  font-weight: normal;
}
a{
  text-decoration: none;
  color: white;
}
</style>
