<script>
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            title:'title',
            info:{
                name:"可口可樂",
                age:2,
                type:"臘腸"
            },
            cool:"",
            selectText:"",
            lazyText:"",
            numberText:"",
            trimText:"",
            checkboxText:[],
            radioText:""

        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation","getWeather"])
    },
    mounted(){
        this.setLocation(2)
    }
}
</script>
<template>
    <button type="button" @click="getLocation">BTN1</button>
    <button type="button" @click="setLocation(2)">BTN2</button>
    <button type="button" @click="getWeather">weather</button>
    <h1>{{ this.title }}</h1>
<!-- V-text -->
<h2>V-text</h2>
<p v-text="'this a page'"></p>
<p v-text="title"></p>
<p v-text="info"></p>
<h1>info{{ this.info }}</h1>
<p v-text="'info'+title"></p>
<p v-text="`info ${info}`"></p>

<br />
<!-- V-model -->
    <h2>V-model</h2>
    <input type="text" v-model="cool">
    <p>{{ this.cool }}</p>

    <select name="" id="" v-model="selectText">
    <option value="">請選擇</option>
    <option value="1">1</option>
    <option value="2">2</option>
</select>
<p>{{ this.select }}</p>


<!-- lazy number trim -->

<span>v-model.lazy</span>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>
    <br>

<span>v-model.number</span>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>
    <br>

<span>v-model.trim</span>
    <input type="trim" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>
    <br>

    <!-- checkbox 複選 -->
    
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkboxText" name="mael" value="breakfast">
    <label for="">午餐</label>
    <input type="checkbox" v-model="checkboxText" name="mael" value="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkboxText" name="mael" value="dinner">
    <h3>{{ this.checkboxText }}</h3>

    <!-- radio 單選 -->

    <label for="">早餐</label>
    <input type="radio" value="早餐" v-model="radioText" name="food">
    <label for="">午餐</label>
    <input type="radio" value="午餐" v-model="radioText" name="food">
    <label for="">晚餐</label>
    <input type="radio" value="晚餐" v-model="radioText" name="food">

    <p>{{ this.radioText }}</p>
</template>

<style scoped lang="scss">

</style>
