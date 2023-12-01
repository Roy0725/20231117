<script>
export default{
    data(){
        return{
            show:false,
            description:"",  
            amount:"",
            money:[],
            num:"",
            sum:"",
        }
    },
    methods:{
        submit(){
            const form = document.querySelectorAll('input')
            this.num = 0
            form.forEach(item =>{
                if(item.value.length == 0){
                    alert("請填寫完整資訊")
                }
                this.num++
            })
            if(this.num == form.length){
                this.money.push({})
            }
            // // 防呆
            // if(this.expend && this.price){
            //     // 儲存置本機儲存空間
            //     const data = {
            //         expend: this.expend,
            //         price: this.price
            //     };
            //     this.info.push(data);
            //     localStorage.setItem("itemData", JSON.stringify(this.info));
            //     this.close();
            // }else{
            //     alert("請填寫完整資訊")
            // }
        },
        close(){
            this.show = false;
            // 重置欄位
            this.description = "";
            this.amount = "";
        },
        delete(){
            this.money.splice(index,1)
        }
    },
    mounted(){
        const total = document.getElementById('total')
        const income = document.getElementById('income')
        const expend = document.getElementById('expend')
        
        let minus = []
    }
}
</script>

<template>
<div class="main">
    <div class="left">
        <h1>Expense Tracker</h1>
        <h2>Your Balance</h2>
        <p id="total">$ 總金額</p>
    </div>
    <div class="right">
        <div class="earn">
            <p>INCOME</p>
            <p id="income">$ 摳摳</p>
        </div>
        <div class="purchase">
            <p>EXPENSE</p>
            <p id="expend">$ 摳摳</p>
        </div>
        <button type="button" @click="show = !show" class="add">Add Transaction</button>
        <div v-if="show" class="model">
            <!-- 彈出視窗內容 -->
            <label for="">項目 :</label>
            <input type="text" v-model="expend" placeholder="請輸入項目">
            <label for="">金額 :</label>
            <input type="text" v-model="price" placeholder="請輸入金額">
            <button @click="submit" class="check">確定</button>
            <button @click="close" class="check">關閉</button>
        </div>
        <div class="showArea">
        <ul>
            <li v-for="(item,index) in info">
                <span>項目:{{item.expend}}  金額:{{item.price}}</span>
                <button type="button" @click="delete">Delete</button>
            </li>
        </ul>
        </div>
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
            color: green;
        }
        .purchase{
            position: absolute;
            top: 20%;
            right: 25%;
            font-size: 32pt;
            color: red; 
        }
        
        .add{
            width: 200px;
            height: 30px;
            position: absolute;
            top: 50%;
            left: 40%;
            border-radius: 5px;
            background-color: #51578f;
            color: white;
        }
        .model{
            width: 300px;
            height: 300px;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #6b7280;
            color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            input{
                margin-top: 50px;
                border-radius: 5px;
            }
            .check{
                margin: 30px 20px;
                background-color: #51578f;
                color: white;
                border-radius: 5px;
            }
        }
        .showArea{
            position: absolute;
            top: 70%;
            left: 40%;
            overflow: auto;
            li{
                list-style: none;
                // width: 30%;
                height: 30%;
                border: 1px solid black;
            }
        }
    }
}
</style>