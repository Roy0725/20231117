<script>
import injectChild from '../components/injectChild.vue'
export default{
    data(){
        return{
            
        }
    },
    components:{
        injectChild,
    }
}
</script>

<template>
<div class="fatherArea">
    <h3>林北的地盤</h3>
    <injectChild />
</div>
</template>

<style scoped lang="scss">
.fatherArea{
    width: 400px;
    height: 500px;
    border: 1px solid rgb(60, 60, 216);
    margin: 0 auto;
}
</style>