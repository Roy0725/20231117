<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import child from '../components/child.vue'
export default{
    data(){
        return{
            title:"father to son",
            name:"",
            password:"",
            phone:"",
            open:false,
            warn:"",
            num:"",
            person:{
                name:"Roger",
                age:31,
                sex:"male",
            }
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        check(){
            const allIN = document.querySelectorAll("input")
            this.num = 0
            allIN.forEach(item =>{
                if(item.value.length == 0){
                    this.warn = "尚未完成填寫"
                    return
                }
                this.num++                
            })
            if(this.num == allIN.length){
                            //將false轉成true 反之亦然
                this.open = !this.open 
            }
        }
    },
    components:{
        child
    },
    mounted(){
        this.setLocation(8)
    },
}
</script>

<template>
    <div class="area">
    <!-- <h2>{{ this.title }}</h2> -->
    <child 
    v-bind:parentMsg="this.title"
    :inputName="this.name"
    :inputPassword="this.password"
    :inputPhone="this.phone"
    v-show="this.open == true"/>
    <!-- 註冊頁面 -->
    <!-- 名字，密碼，手機 -->
    <!-- props輸入，child確認 -->
    <div class="info" v-show="this.open == false">
     <form action="">
        <h1 v-show="this.num !== 3" style="color: red;">{{ this.warn }}</h1>
        <!-- <label for="">名字</label>
        <input type="text" v-model="this.name">
        <label for="">密碼</label>
        <input type="text" v-model="this.password">
        <label for="">手機</label>
        <input type="number" v-model="this.phone">
        <button type="button" @click="check()">Btn</button> -->
        {{ this.person }}
        <child :personName="this.person.name"/>
        <!-- v-bind 自動拆解此物件 -->
        <child v-bind="this.person"/>
    </form> 
</div>
</div>
</template>

<style scoped lang="scss">
.area{
    width: 80%;
    height: 80%;
    border: 1px solid black ;
    form{
        display: flex;
        flex-direction:column;
        width: 200px;
        align-items: center;
        margin-left: 40%;
        button{
            margin-top: 20px;
        }
    }
}
</style>  