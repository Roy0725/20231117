<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import injectFather from '../components/injectFather.vue'
import { computed } from 'vue';
import {ref, provide} from 'vue';

export default{
    data(){
        return{
            message:"nuguseyeo",
            arr:["a","b"],
            person:{
                name:"asiagodtone",
                age:34
            }
        }
    },
    components:{
        injectFather,
    },
    methods:{
        ...mapActions(counter, ["setLocation"]),
        addArr(){
            this.arr.push(this.setupMsg)
        },
        addAtt(){
            this.person.type = "god"
        }
    },
    provide(){
        return{
            mess : computed(() => this.message),
            aisatsu:"shibalnuma",
            dog:"gaessekki",
            arr1:this.arr,
            god:this.person,
        }
    },
    setup(){
        //let setupMsg = "upMsg"
        let setupMsg = ref('預設值')
        //{{steupMSG:setupMsg}}
        provide('setMSG', setupMsg)
        return{
            setupMsg,
        }
    },
    mounted(){
        this.setLocation(11)
    }
}

</script>

<template>
<div class="area">
    <h3>阿公的變數</h3>
    <!-- <h4>{{ this.message }}</h4> -->
    <input type="text" v-model="message">
    <br>
    <input type="text" v-model="this.setupMsg">
    {{ this.arr }}
    <button type="button" @click="this.addArr()">Btn</button>
    <button type="button" @click="this.addAtt()">Btn2</button>
    <injectFather />
</div>
</template>

<style scoped lang="scss">
.area{
    width: 500px;
    height: 600px;
    border: 1px solid black;
    margin: 0 auto;
}
</style>