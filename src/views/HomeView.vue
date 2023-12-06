<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{
            arr:["aaa","bbb","ccc"]
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
    },
    mounted(){
        this.setLocation(1)
    },
}
</script>

<template>
<div class="container">

    <!-- <div class="VtestAndVmodel">
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
    
    <div class="ProvideAndInject">
        <a alt="ProvideAndInject" @click="goProvideAndInject">ProvideAndInject</a>
    </div>

    <div class="Emit">
        <a alt="Emit" @click="goEmit">Emit</a>
    </div>

    <div class="DataFlow">
        <a alt="DataFlow" @click="goDataFlow">DataFlow</a>
    </div>
    
    <div class="Three">
        <a alt="Three" @click="goThree">Three</a>
    </div>

    <div class="Introduction">
        <a alt="Introduction" @click="goIntroduction">Introduction</a>
    </div>

    <div class="Accounting">
        <a alt="Accounting" @click="goAccounting">Accounting</a>
    </div>

    <div class="User">
        <a alt="User" @click="goUser">User</a>
    </div>  -->

        <RouterLink to="/VtestAndVmodel" class="routerLong">
            <a alt="VtestAndVmodel">VtestAndVmodel</a>
        </RouterLink>

        <RouterLink to="/Vfor" class="routerShort">
            <a alt="Vfor">Vfor</a>
        </RouterLink>
        <RouterLink to="/Von" class="routerShort">
            <a alt="Von">Von</a>
        </RouterLink>

        <RouterLink to="/Vbind" class="routerShort">
            <a alt="Vbind">Vbind</a>
        </RouterLink>

        <RouterLink to="/VifAndVshow" class="routerLong">
            <a alt="VifAndVshow">VifAndVshow</a>
        </RouterLink>

        <RouterLink to="/WatchAndComputed" class="routerLong">
            <a alt="WatchAndComputed">WatchAndComputed</a>
        </RouterLink>

        <RouterLink to="/Props" class="routerShort">
            <a alt="Props">Props</a>
        </RouterLink>

        <RouterLink to="/Emit" class="routerShort">
            <a alt="Emit">Emit</a>
        </RouterLink>

        <RouterLink to="/DataFlow" class="routerShort">
            <a alt="DataFlow">DataFlow</a>
        </RouterLink>

        <RouterLink to="/ProvideAndInject" class="routerLong">
            <a alt="ProvideAndInject">ProvideAndInject</a>
        </RouterLink>

        <RouterLink to="/RouteFam" class="routerShort">
            <a alt="RouteFam">RouteFam</a>
        </RouterLink>

        <RouterLink to="/Introduction" class="routerLong">
            <a alt="Introduction">Introduction</a>
        </RouterLink>
        
        <RouterLink to="/Accounting" class="routerLong">
            <a alt="Accounting">Accounting</a>
        </RouterLink>
        
        <RouterLink to="/Three" class="routerShort">
            <a alt="Three">Three</a>
        </RouterLink>

        <RouterLink  v-for="i in arr" :to="`/User/${i}`" class="routerShort">
            <a alt="User">User{{ i }}</a>
        </RouterLink>

</div>
</template>

<style scoped lang="scss">
.container{
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1vmin;
    padding: 20vmin;
    

    a{
        font-size: 24pt;
        text-align: center;
        cursor: pointer;
        color:  #D95E37;
        text-decoration: none;
        // margin: 0px 10px;
        padding: 6px 6px;
        position: relative;
        z-index: 0;


       &::before{
        position: absolute;
        color: #FFF;
        top: -4px;
        left: -4px;
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

    .routerLong{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .routerShort{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }


    .VtestAndVmodel{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Vfor{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Von{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Vbind{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .VifAndVshow{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .WatchAndComputed{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Props{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Emit{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .DataFlow{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .ProvideAndInject{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Introduction{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Three{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .Accounting{
        width: 20vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .User{
        width: 10vw;
        height: 10vh;
        border-radius: 5px;
        background-color: #3D4490;
        display: flex;
        justify-content: center;
        align-content: center;
    }
}
</style>