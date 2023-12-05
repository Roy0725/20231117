<script>
export default{
    data(){
        return{
            open:false,
            username:"",
            password:"",
            secondPassword:"",
            passwordMatch:false,
            
        }
    },
    methods:{
        goAccounting(){
            this.$router.push('/Accounting')
        },
        register() {
            // 檢查兩次密碼是否相符
            if (this.password === this.secondPassword) {
            // 模擬將帳號密碼存儲到本地存儲空間
                const data = {
                        username: this.username,
                        password: this.password,
                    }
                    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
                    registrations.push(data);
                    localStorage.setItem("registrations", JSON.stringify(registrations));

                this.passwordMatch = false; // 重置錯誤狀態
                alert("註冊成功!");
                this.$router.push('/Accounting')
            } else {
                    this.passwordMatch = true;
                    alert("密碼不符")
            }
        },
    },
}
</script>

<template>
<div class="main">
    <div class="title">
    <h1>Expense Tracker</h1>
</div>
<form @submit.prevent="register">
    <div class="enter">
        <label for="username">Account</label>
        <input type="text" v-model="username" required placeholder="Placeholder/input text"> 
        <label for="password">Password</label>
        <input type="password" v-model="password" required placeholder="Placeholder/input text">
        <label for="secondPassword">Repeat Password</label>
        <input type="password" v-model="secondPassword" required placeholder="Placeholder/input text">
    </div>
        <button type="button" @click="goAccounting">Cancel</button>

        <button type="submit">Sign Up</button>
</form>
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