<script>
export default{
    data(){
        return{

        }
    },
}
</script>

<template>
<div class="main">
    <div class="left">
        <h1>Expense Tracker</h1>
        <h3>Roy</h3>
        <h2>Your Balance</h2>
        <p>$ 摳摳</p>
    </div>
    <div class="right">
        <div class="earn">
            <p>INCOME</p>
            <p>$ 摳摳</p>
        </div>
        <div class="purchase">
            <p>EXPENSE</p>
            <p>$ 摳摳</p>
        </div>
        <button type="button" @click="">Add Transaction</button>
    </div>
</div>
</template>

<style scoped lang="scss">

.main{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 28vw;
        height: 100%;
        background-color:#818cf8;
        position: relative;
        h1{
            color: white;
            position: absolute;
            top: 20%;
            left: 15%;
        }
        h2{
            color: white;
            position: absolute;
            top: 60%;
            left: 25%;
        }
        h3{
            color: white;
            position: absolute;
            top: 50%;
            left: 40%;
        }
        p{
            font-size: 24pt;
            color: white;
            position: absolute;
            top: 70%;
            left: 30%;
        }
    }
    .right{
        width: 72vw;
        display: flex;
        flex-direction: column;
        position: relative;
        .earn{
            position: absolute;
            top: 20%;
            left: 25%;
            font-size: 32pt;
        }
        .purchase{
            position: absolute;
            top: 20%;
            right: 25%;
            font-size: 32pt;    
        }
        button{
            width: 200px;
            height: 30px;
            position: absolute;
            top: 50%;
            left: 40%;
            border-radius: 5px;
            background-color: #51578f;
            color: white;
        }
    }
}
</style>