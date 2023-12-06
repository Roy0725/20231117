<template>
    <div class="area">
        <div class="left">
            <RouteFamBar />
        </div>

        <div class="right">
            <RouterView />
        </div>
</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import RouteFamBar from '../components/RouteFamBar.vue';
export default {
    components:{
        RouterView,
        RouteFamBar,
    }
}
</script>

<style lang="scss" scoped>
.area{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
        width: 100%;
        height: 50%;
        border: 1px solid black;
    }
    .right{
        width: 100%;
        height: 50%;
        border: 1px solid black;
    }
}
</style>