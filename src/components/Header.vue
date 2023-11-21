<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
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