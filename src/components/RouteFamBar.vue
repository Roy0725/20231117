<template>
    <div>
        <RouterLink to="/RouteFam/RouteChild">RouteChild</RouterLink>
        <RouterLink to="/RouteFam/RouteChild2">RouteChild2</RouterLink>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components:{
        RouterLink
    }
}
</script>
<style lang="scss">
    
</style>