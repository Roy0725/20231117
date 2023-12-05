<script>
export default{
    data(){
        return{
            open:false,
            username:"",
            password:"",
            loginErr:false,
        }
    },
    methods:{
        goSignUp(){
            this.$router.push('/SignUp')
        },
        login(){
            const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

            const match = registrations.find((registration) =>
            registration.username === this.username && registration.password === this.password);
            if (match) {
                this.loginErr = ""; // 登入成功
                alert("登入成功!");
                this.$router.push('/Interface')
            } else {
                alert("無效的帳號或密碼")
            }
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
<form @submit.prevent="login">
        <div class="enter">
            <label for="username">Account</label>
            <input type="text" v-model="username" required placeholder="Placeholder/input text"> 
            <label for="password">Password</label>
            <input type="password" v-model="password" required placeholder="Placeholder/input text">
        </div>
        <button type="button" @click="goSignUp()">Sign Up</button>
        <button type="submit">Log In</button>
</form>
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