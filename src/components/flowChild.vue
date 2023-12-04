<script>
export default{
    data(){
        return{
            obj:{}
        }
    },
    methods:{
        get(){
            console.log(this.obj);
            this.$emit('get', this.obj)
        }
    }
}
</script>

<template>
<div class="childArea">
    <h2>Child這邊輸入資料</h2>

    <form action="">
        <label for="">姓名 : </label>
        <input type="text" >

        <label for="">手機 : </label>
        <input type="number" >

        <div class="sex">
            <label for="">性別 : </label>
            <input type="radio" value="male" name="contact">
            <label for="sex">男</label>
            <input type="radio" value="female" name="contact">
            <label for="sex">女</label>
        </div>
        <label for="">地址 : </label>
        <input type="text" >

        <label for="">年齡 : </label>
        <input type="number" >

        <button type="button" @get="">送出</button>
    </form>
</div>
</template>

<style scoped lang="scss">
.childArea{
    width: 500px;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
    
    form{
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        margin-left: 150px;
        button{
            width: 60px;
            height: 30px;
            margin: 30px 60px;
            border-radius: 5px
        }
    }
}
</style>