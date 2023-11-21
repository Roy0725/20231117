<script>
export default{
    data(){
        return{
            title:""
        }
    },
    methods:{
        print(){
            console.log("btn");
            this.title="btn"
        },
        sky(){
            console.log("sky");
        },
        write(){
            console.log(this.text);
            alert("xxx")
        },
        goOtherWay(){
            this.$router.push('/Vfor')
        }
    }
}   
</script>

<template>
    <h1>V-on</h1>
    <button type="button" v-on:click="print()">btn</button>
    <p>{{ this.title }}</p>

    <select name="" id="" @change="sky()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <input type="text" v-model="this.text" @keydown.enter="write()">

    <button type="button" @click="goOtherWay()">
        <i class="fa-solid fa-plane"></i>

</button>

</template>

<style scoped lang="scss">

</style>  