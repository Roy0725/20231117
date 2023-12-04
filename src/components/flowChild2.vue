<script>
export default{
    data(){
        return{

        }
    },
   props:[
        "name",
        "phone",
        "sex",
        "address",
        "age",
   ]
}
</script>

<template>
<div class="childArea2">
    <h2>Child2這邊輸入資料</h2>

    <p>姓名 : {{this.name}}</p>
    <p>手機 : {{this.phone}}</p>
    <p>性別 : {{this.age}}</p>
    <p>地址 : {{this.address}}</p>
    <p>年齡 : {{this.age}}</p>
</div>
</template>

<style scoped lang="scss">
.childArea2{
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
    
}
</style>