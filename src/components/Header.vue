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
        ...mapState(counter,["location","locationInfo"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="routerItem">Home</RouterLink>
        <RouterLink to="/VtestAndVmodel" class="routerItem">VtestAndVmodel</RouterLink>
        <RouterLink to="/Vfor" class="routerItem">Vfor</RouterLink>
        <RouterLink to="/Von" class="routerItem">Von</RouterLink>
        <RouterLink to="/Three" class="routerItem">切版</RouterLink>

    </div>
    <span>{{ location }}</span>
    <span>{{ locationInfo }}</span>
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
</style>