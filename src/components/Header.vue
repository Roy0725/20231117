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
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/VtestAndVmodel">VtestAndVmodel</RouterLink>
    </div>
</template>

<style scoped lang="scss">
.headerShow{
    width: 100%;
    height: 100%;
    background-color: #7e22ce;
}
</style>