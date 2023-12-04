<script>
export default{
    data(){
        return{
            show:false,
            description:"",  
            amount:"",  
            records:[],  //陣列儲存
            type:'income', //預設為收入
        }
    },
    computed:{
        totalIncome() {
            return this.records
                .filter((record) => record.type === "income")
                .reduce((total, record) => total + record.amount, 0);
    },
        totalExpense() {
            return this.records
                .filter((record) => record.type === "expense")
                .reduce((total, record) => total + record.amount, 0);
    },
},
    methods:{
        submit(){
                //防呆
                if (this.description && this.amount) {
                    const record = {
                        type: this.type,
                        description: this.description,
                        amount: parseFloat(this.amount)
                    };
                    this.records.push(record);
                    this.saveToLocalStorage(); // 在新增記錄後保存到本地儲存空間
                    this.close();
                } else {
                    alert("請填寫完整的資訊");
                }
        },
        deleteRecord(index) {
            const sureDelete = window.confirm("確定要刪除嗎？");

            if (sureDelete) {
                this.records.splice(index, 1);
                this.saveToLocalStorage(); // 在刪除記錄後保存到本地儲存空間
            }
        },
        close(){
            this.show = false;
            // 重置欄位
            this.description = "";
            this.amount = "";
            this.type = "income";
        },
        // 保存到本地儲存空間
        saveToLocalStorage() {
            localStorage.setItem("records", JSON.stringify(this.records));
        },
        // 在 mounted 階段從本地儲存取得資料
        loadFromLocalStorage() {
            const saved = JSON.parse(localStorage.getItem("records")) || [];
            this.records = saved;
        }
    },
    mounted(){
        this.loadFromLocalStorage();

        this.records.forEach(record => {
        console.log('Record Type:', record.type);
         });
    }
}
</script>

<template>
<div class="main">
    <div class="left">
        <h1>Expense Tracker</h1>
        <h2>Your Balance</h2>
        <p id="total" :class="{ 'positive': totalIncome - totalExpense > 0, 'negative': totalIncome - totalExpense < 0 }">$ {{totalIncome - totalExpense}}</p>
    </div>
    <div class="right">
        <div class="earn">
            <p>INCOME</p>
            <p id="income">$ {{ totalIncome }}</p>
        </div>
        <div class="purchase">
            <p>EXPENSE</p>
            <p id="expense">$ {{ totalExpense }}</p>
        </div>
        <button type="button" @click="show = !show" class="add">Add Transaction</button>
        <div v-if="show" class="model">
            <!-- 彈出視窗內容 -->
            <label for="">項目 :</label>
            <input type="text" v-model="description" id="description" placeholder="請輸入項目">

            <label for="">金額 :</label>
            <input type="number" v-model="amount" id="amount" placeholder="請輸入金額">

            <div class="option">
                <label for="">類型</label>
                <select v-model="type" id="type">
                <option value="income">收入</option>
                <option value="expense">支出</option>
                </select>
            </div>
            <button @click="submit" class="check">確定</button>
            <button @click="close" class="check">關閉</button>
        </div>
        <div class="showArea">
        <ul>
            <li v-for="(item,index) in records" :key="index"
            :style="{ borderRight: item.type === 'income' ? '5px solid green' : '5px solid red' }">
            <button type="button" @click="deleteRecord(index)" class="delete-btn">
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </button>
                {{item.description}} <span class="details">{{item.amount}}</span>
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
        height: 100vh;
        background-color:#818cf8;
        position: relative;
        .positive{
            color: green;
        }
        .negative{
            color: red;
        }
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
            z-index: 1;
            input{
                margin-top: 50px;
                border-radius: 5px;
            }
            .option{
                display: flex;
                justify-content: center;
                margin-top: 20px;
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
            top: 60%;
            left: 30%;
            width: 350px;
            height: 300px;
            overflow: auto;

            li{
                list-style: none;
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                font-size: 20pt;
                border-radius: 5px;
                background-color: #e2e8f0;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                padding: 5px;
                
                .details{
                    margin-left: 10px;
                    display: inline-block;
                }
                .delete-btn{
                    opacity: 0;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 20pt;
                    transition: opacity 0.3s ease;
                    
                }
                .delete-btn:hover{
                    content: "";
                    opacity: 1;
                    color: red;
                }
                .fa-sharp::before {
                    content: "\f00d";
                    font-family: "Font Awesome 5 Free";
                }
            }
        }
    }
}
</style>