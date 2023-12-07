<template>
    <div>
        <slot name="header">
            <p>header</p>
        </slot>
        <slot />
        <slot name="footer">
            <p>footer</p>
        </slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    // slot{
    //     color: beige;
    //     background-color: #514d4d;
    // }
</style>