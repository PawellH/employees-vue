<template>
<div id="header">
    <router-link to="/" id="icoDiv">
      <img src="/images/ico.png" alt="ico" id="icoImg">
      <h1>Employees</h1>
    </router-link>
    <span v-if="person" id="employee">/ #{{person.id}} {{person.lastname}} {{getInitials(person.first_name, person.middle_name)}}</span>
</div>
</template>
<script>
export default {
  props: {
    person: Object,
  },
  methods: {
    getInitials(firstName, middleName) {
      const str = `${firstName.substr(0, 1)}.${middleName.substr(0, 1)}.`;
      return str;
    },
  },
};
</script>
<style scoped>
* ::after ::before {
  box-sizing: border-box;
}
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
#employee{
  padding-left: 30px;
  font-size: 16px;
  color: rgb(154, 212, 247);
}
</style>
