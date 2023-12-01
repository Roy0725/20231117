<script>
export default{
    data(){
        return{
            text:"Buddha",
            oni:"Asura"
        }
    },
    methods:{
        emitGo(){
            this.$emit("bodhi",this.text)
        }
    },
    mounted(){

    },
}
</script>

<template>
<div class="childArea">
    <p>india</p>
    {{ this.text }}
    <button type="button" @click="emitGo">btn</button>
    <button type="button" @click="$emit('bodhi',this.oni)">btn2</button>
</div>
</template>

<style scoped lang="scss">
.childArea{
    width: 200px;
    height: 200px;
    border: 1px solid crimson;
    margin: 0 auto;
}

</style>  