<script>
import{mapState,mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            handsome:true,
            ugly:true,
            horse:0,
            horse2:0,
            show:false,
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        test() {

        }
    },
    mounted(){
        this.setLocation(7)
    },
    

}
</script>

<template>
    <h1>V-if</h1>
    <label for="">我是帥哥</label>
    <input type="checkbox" value="true" v-model="handsome">
    <p v-if="handsome">的確很帥</p>
    <!-- <p v-if="handsome == (數字、字串、陣列長度)皆可)">其實也還好</p> -->
    <p v-if="ugly">其實也還好</p>
    <p>-----------------------</p>

    <h1>V-show</h1>
    <label for="">你是帥哥</label>
    <input type="checkbox" value="true" v-model="ugly">
    <p v-show="ugly">你真的不是</p>
    <p>-----------------------</p>

    <h1>V-if & V-else</h1>
    <label for="">有馬</label>
    <select name="" id="" v-model="horse">
        <option value="0">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <p v-if="horse == 1">有馬加奈</p>

    <p v-if="horse == 2">有馬加航</p>
    <p v-else>無馬</p>

    <h1>v-if & v-else-if & v-else</h1>
    <label for="">有馬</label>
    <select name="" id="" v-model="horse2">
        <option value="0">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <p v-if="horse2 == 1">有馬加奈</p>  
    <p v-else-if="horse2 == 2">有馬加航</p>
    <p v-else>無馬</p>


    <!-- <button type="button" @click="showCard">show</button>
    <card v-show="show"/> -->
</template>

<style scoped lang="scss">

</style>  