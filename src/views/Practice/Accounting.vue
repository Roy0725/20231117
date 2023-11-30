<script>
export default{
    data(){
        return{
            open:false,

        }
    },
    methods:{
        goSignUp(){
            this.$router.push('/SignUp')
        },
        goInterface(){
            this.$router.push('/Interface')
        }
    },
    components:{
        
    }
}
</script>

<template>
<div class="main" v-show="this.open == false">
    <div class="title">
    <h1>Expense Tracker</h1>
</div>
<div class="enter">
        <label for="">Account</label>
        <input type="text" required placeholder="Placeholder/input text"> 
        <label for="">Password</label>
        <input type="text" required placeholder="Placeholder/input text">
</div>
    <button type="button" @click="goSignUp()">Sign Up</button>
    <button type="button" @click="goInterface()">Log In</button>
</div>
</template>

<style scoped lang="scss">
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
    background-color: #075985;
    color: rgb(230, 224, 224);
    border-radius: 5px;
}
</style>  