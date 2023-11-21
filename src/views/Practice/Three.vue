<script>
export default{
    data(){
        return{
            arr:[1,2,3]
        }
    }
}
</script>

<template>
<div class="header"></div>
<div class="block"></div>

<div class="middle">
    <div class="left"></div>
    <div class="right">
        <div class="head">
            <h1>Title</h1>            
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam a iusto eos nemo accusamus ex.</span>
        </div>
    <div class="cover">
    <div class="box" v-for="item in arr"></div>
    </div>
    <div class="cover">
    <div class="box" v-for="item in arr"></div>
    </div>
    <div class="cover">
    <div class="box" v-for="item in arr"></div>
    </div>
    </div>
</div>
<div class="footer"></div>

</template>

<style scoped lang="scss">
.header{
    background-color: #67e8f9;
    width: 100vw;
    height: 80px;
}
.block{
    height: 100vw;
    height: 250px;
    margin-bottom: 50px;
    background-color: #2563eb;
}
.middle{
    width: 100vw;
    height: 1000px;
    margin-top: 20px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .left{
    width: 25vw;
    height: 100%;
    background-color: #60a5fa;
    }

    .right{
        width: 75vw;
        height: 100%;
        .head{
        margin-left: 10%;
        display: flex;
        width: 75vw;
        height: 10%;
        h1{
            margin: 0;
        }
        span{
            margin-left: 10px;
            margin-top: 10px;
        }
        }
        .cover{
        display: flex;
        justify-content: space-evenly;
        .box{
        width: 200px;
        height: 200px;
        background-color: #60a5fa;
        margin-top: 50px;
    }
    }
    }
}
.footer{
    width:100vw;
    height: 100px;
    background-color:#60a5fa;
}
</style>  