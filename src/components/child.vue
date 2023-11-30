<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "parentMsg",
        "inputName",
        "inputPassword",
        "inputPhone",
        "personName",
        "name", //取出相對應拆解的元件
        "sex",  //取出相對應拆解的元件
    ]
}
</script>

<template>
<div class="childArea">
    <h3>childArea</h3>
    <!-- <h3>{{ this.inputName }}</h3>
    <h3>{{ this.inputPassword }}</h3>
    <h3>{{ this.inputPhone }}</h3> -->
    <!-- <h3>{{ this.person }}</h3> -->
    <input type="text" v-model="this.personName">
    <h3>{{ this.name }}</h3>
    <h3>{{ this.sex }}</h3>
</div>
</template>

<style scoped lang="scss">
.childArea{
    width: 250px;
    height: 200px;
    border: 1px solid crimson;
}

</style>  