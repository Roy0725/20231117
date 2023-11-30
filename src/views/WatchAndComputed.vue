<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            point:0,
            ntd:0,
            xxx:0,
        }
    },
    watch:{
        point(){
            this.ntd = this.point * 10
            console.log(this.ntd);
        }
    },
    computed:{
        jyp(){
            return this.ntd * 4.5
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        clickPoint(){
            this.point += 1;
        }
    },//vue檔建立但事件、變數、屬性等等尚未建立
    beforeCreate(){
        console.log("beforeCreate");
    },//vue檔建立且事件、變數、屬性等等已建立
    created(){
        console.log("created");
    },// DOM Tree尚未連接
    beforeMount(){
        console.log("beforeMount");
    },// DOM Tree已連接
    mounted(){
        this.setLocation(7)
    }, //變數已更動但畫面未更新 
    beforeUpdate(){
        console.log("beforeUpdate");
    },//變數更動且畫面同步更新
    updated(){  
        console.log("updated");
    },
    beforeUnmount(){
        console.log("beforeUnmount");
    },
    unmounted(){
        console.log("unmounted");
    },
}
</script>

<template>
    <p>this.point:{{ this.point }}</p>
    <p>this.ntd:{{ this.ntd }}</p>
    <p>this.jyp:{{ this.jyp }}</p>
    <div class="circle" @click="clickPoint()"></div>
</template>

<style scoped lang="scss">
    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 0 auto;
        background: rgb(212, 133, 130);
    }

</style>  