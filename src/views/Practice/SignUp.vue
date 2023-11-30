<script>
export default{
    data(){
        return{
            open:false,

        }
    },
    methods:{
        goAccounting(){
            this.$router.push('/Accounting')
        },
    },
}
</script>

<template>
<div class="main">
    <div class="title">
    <h1>Expense Tracker</h1>
</div>
<div class="enter">
        <label for="">Account</label>
        <input type="text" placeholder="Placeholder/input text"> 
        <label for="">Password</label>
        <input type="text" placeholder="Placeholder/input text">
        <label for="">Repeat Password</label>
        <input type="text" placeholder="Placeholder/input text">
</div>
    <button type="button" @click="goAccounting">Cancel</button>
    <button type="button" @click="goAccounting">Sign Up</button>
</div>
</template>

<style scoped lang="scss">
.main{
    width: 100%;
    height: 100%;
.title{
    margin: 100px 0px;
}
.enter{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 40%;
    margin-bottom: 5%;
    label{
        margin: 10px 0px;
        display: flex;     
    }
    input{
        border-radius: 5px;
    }
}
button{
    margin:0px 23px;
    width:100px;
    height: 30px;
    border-radius: 5px;
    background-color: #075985;
    color: rgb(230, 224, 224);
}
}
</style>  