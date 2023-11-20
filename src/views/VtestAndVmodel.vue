<script>
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

        }
    }
}
</script>
<template>
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

<span>v-model.number</span>
    <input type="trim" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>
    <br>

</template>

<style scoped lang="scss">

</style>
