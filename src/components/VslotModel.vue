<template>
        <div class="container">
            <div class="model">
                <i class="fa-solid fa-xmark" @click="$emit('alertMessage')"></i>
            </div>
            <slot>
                
            </slot>
            <div class="bg"></div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container{
        position: fixed;
        top: 0;
        left: -100px;
        width: 150vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;

        .model{
            height: 50vh;
            width: 50vw;
            background-color: #fff;
            border-radius: 20px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            i{
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                color: black;
                font-size: 30pt;
            }
        }

        .bg{
            position: absolute;
            top: 0;
            left: -100px;
            width: inherit;
            height: inherit;
            background: rgb(0, 0, 0, 0.2);
            backdrop-filter: blur(2px);
        }
    }
</style>