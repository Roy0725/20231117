<script>
export default{
    inject:[
        "mess",
        "aisatsu",
        "dog",
        "setMSG",
        "arr1",
        "god"
    ]
}
</script>

<template>
<div class="childArea">
    <h3>龜ㄚ仔的亭阿腳</h3>
    <h4>{{ this.mess }}</h4>
    <h4>{{ this.aisatsu }}</h4>
    <h4>{{ this.dog }}</h4>
    <h4>{{ this.setMSG }}</h4>
    <h4>{{ this.arr1 }}</h4>
    <h4>{{ this.god }}</h4>
</div>
</template>

<style scoped lang="scss">
.childArea{
    width: 300px;
    height: 400px;
    border:  1px solid rgb(210, 53, 53);
    margin: 0 auto;
}
</style>