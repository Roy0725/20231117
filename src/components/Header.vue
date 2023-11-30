<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter,["location","locationInfo","weatherInfo"])
    },
    methods:{
        ...mapActions(counter,["getWeather"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem" :class="{'cass':this.location === 1}">Home</RouterLink>
        <RouterLink to="/VtestAndVmodel" class="routerItem" :class="{'cass':this.location === 2}">VtestAndVmodel</RouterLink>
        <RouterLink to="/Vfor" class="routerItem" :class="{'cass':this.location === 3}">Vfor</RouterLink>
        <RouterLink to="/Von" class="routerItem" :class="{'cass':this.location === 4}">Von</RouterLink>
        <RouterLink to="/Vbind" class="routerItem" :class="{'cass':this.location === 5}">Vbind</RouterLink>
        <RouterLink to="/VifAndVshow" class="routerItem" :class="{'cass':this.location === 6}">VifAndVshow</RouterLink>
        <RouterLink to="/WatchAndComputed" class="routerItem" :class="{'cass':this.location === 7}">WatchAndComputed</RouterLink>
        <RouterLink to="/Props" class="routerItem" :class="{'cass':this.location === 8}">Props</RouterLink>
        <RouterLink to="/Three" class="routerItem">切版</RouterLink>
        <RouterLink to="/Accounting" class="routerItem">記帳</RouterLink>

    </div>
        <!-- <span>{{ location }}</span>
        <span>{{ locationInfo }}</span> -->
    <!-- <span>{{ weatherInfo }}</span> -->
</template>

<style scoped lang="scss">
.headerShow{
    width: 100%;
    height: 100%;
    background-color: #7e22ce;
}

.routerItem{
    color: #fecaca;
    font-size: 24pt;
    text-decoration: none;
    margin-left: 20px;
}

.cass{
    background-color: #0c4a6e;
    color: whitesmoke;
    border-radius: 5px;
}
</style>