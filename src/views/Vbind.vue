<script>
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            totle:"title",
            isBlue:false,
            isLarge:false,
            styleArr:[],
            imgTest:"",
            arrText:[1,2,3,4,5,6,7,8,9,10],
            text:"",
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(5)
    }
}
</script>

<template>
    <!-- v-model 標籤的值 <雙向綁定> 變數 -->
    <!-- v-bind 標籤的屬性 <單向綁定> 變數 -->
    <h1 class="title">Title</h1>
    <h1 v-bind:class="totle">Head</h1>

    <h3>class{}</h3>
    <label for="">isBlue</label>
    <input type="checkbox" value="true" v-model="isBlue">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <!-- v-bind的縮寫 直接給冒號: -->
    <h2 :class="{
        blue:isBlue,
        large:isLarge,
    }">亞馬遜</h2>

    <h3>class{{ styleArr }}</h3>
    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="styleArr" name="test">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" name="test">
    <label for="">Italic</label>
    <input type="checkbox" value="italic" v-model="styleArr" name="test">

    <h2 :class="styleArr">見世物小屋</h2>

    <label for="">くじら</label>
    <input type="radio" value="https://live.staticflickr.com/65535/51485730298_8890ac8771_b.jpg" v-model="imgTest" name="imgs">
    <label for="">イルカ</label>
    <input type="radio" value="https://www.greenpeace.org/static/planet4-taiwan-stateless/ac198b04-gp1su6g1-1024x683.jpg" v-model="imgTest" name="imgs">
    <label for="">ジュゴン</label>
    <input type="radio" value="https://wr-images.chinatimes.com/newsphoto/2022-08-24/1024/20220824900868.jpg" v-model="imgTest" name="imgs">

    <img :src="imgTest" alt="">

    <p>{{ this.test }}</p>
    <select name="" id="" v-model="test">
        <option value="">請選擇</option>
        <option :value="index" v-for="(item,index) in arrText">{{ item }}</option>
    </select>

</template>

<style scoped lang="scss">
.title{
    color: crimson;
}
.blue{
    color:#312e81;
}
.large{
    font-size: 50pt;
}
.italic{
    font-style: italic;
}
</style>  