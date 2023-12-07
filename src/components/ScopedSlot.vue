<template>
    <div>
        <slot :text="this.message" :count="8">
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message:"Responsibility"
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>