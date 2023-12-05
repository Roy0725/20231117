<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        goVtestAndVmodel(){
            this.$router.push('/VtestAndVmodel')
        },
        goVfor(){
            this.$router.push('/Vfor')
        },
        goVon(){
            this.$router.push('/Von')
        },
        goVbind(){
            this.$router.push('/Vbind')
        },
        goVifAndVshow(){
            this.$router.push('/VifAndVshow')
        },
        goWatchAndComputed(){
            this.$router.push('/WatchAndComputed')
        },
        goProps(){
            this.$router.push('/Props')
        },
        goEmit(){
            this.$router.push('/Emit')
        },
        goDataFlow(){
            this.$router.push('/DataFlow')
        },
        goProvideAndInject(){
            this.$router.push('/ProvideAndInject')
        },
        goIntroduction(){
            this.$router.push('/Introduction')
        },
        goThree(){
            this.$router.push('/Three')
        },
        goAccounting(){
            this.$router.push('/Accounting')
        },
    },
    mounted(){
        this.setLocation(1)
    },
}
</script>

<template>
<div class="container">

    <div class="VtestAndVmodel">
        <a alt="VtestAndVmodel" @click="goVtestAndVmodel">VtestAndVmodel</a>
    </div>

    <div class="Vfor">
        <a alt="Vfor" @click="goVfor">Vfor</a>
    </div>

    <div class="Von">
        <a alt="Von" @click="goVon">Von</a>
    </div>

    <div class="Vbind">
        <a alt="Vbind" @click="goVbind">Vbind</a>
    </div>

    <div class="VifAndVshow">
        <a alt="VifAndVshow" @click="goVifAndVshow">VifAndVshow</a>
    </div>

    <div class="WatchAndComputed">
        <a alt="WatchAndComputed" @click="goWatchAndComputed">WatchAndComputed</a>
    </div>

    <div class="Props">
        <a alt="Props" @click="goProps">Props</a>
    </div>

    <div class="Emit">
        <a alt="Emit" @click="goEmit">Emit</a>
    </div>

    <div class="DataFlow">
        <a alt="DataFlow" @click="goDataFlow">DataFlow</a>
    </div>
    <div class="ProvideAndInject">
        <a alt="ProvideAndInject" @click="goProvideAndInject">ProvideAndInject</a>
    </div>

    <div class="Introduction">
        <a alt="Introduction" @click="goIntroduction">Introduction</a>
    </div>

    <div class="Three">
        <a alt="Three" @click="goThree">Three</a>
    </div>

    <div class="Accounting">
        <a alt="Accounting" @click="goAccounting">Accounting</a>
    </div>
</div>
</template>

<style scoped lang="scss">
.container{
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1vmin;
    margin-top: 10vmin;
    a{
        font-size: 24pt;
        text-align: center;
        cursor: pointer;
        // color: rgba(255, 255, 255, 0.3)
        color:  rgb(150, 102, 102);
        text-decoration: none;
        // font: 20px Raleway;
        margin: 0px 10px;
        padding: 10px 10px;
        position: relative;
        z-index: 0;


       &::before{
        position: absolute;
        color: #FFF;
        top: 0px;
        left: 0px;
        padding: 10px;
        overflow: hidden;
        content: attr(alt);
        transition: all 0.3s;
        transform: scale(0.8);
        opacity: 0;
       }
       &:hover::before{
        transform: scale(1);
        opacity: 1;
       }

    }
    .VtestAndVmodel{
        width: 17vw;
        height: 8vh;
        border-radius: 5px;
        background-color: #a3e635;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Vfor{
        width: 10vw;
        height: 8vh;
        border-radius: 5px;
        background-color: #a3e635;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Von{
        width: 10vw;
        height: 8vh;
        border-radius: 5px;
        background-color: #a3e635;
        display: flex;
        justify-content: center;
        align-content: center;
    }
}
</style>