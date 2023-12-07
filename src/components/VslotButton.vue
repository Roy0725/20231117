<template>
    <button class="btn">
        <slot />
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .btn{
        color: #fff;
        background:linear-gradient(310deg,green 25%,blue);
        border:none;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>