<script>
export default{
    data(){
        return{
            arr:[1,2,3],
            arr2:[
                {
                    name:"火鍋",
                    type:"麻辣",
                    price:120,
                },
                {
                    name:"燒肉",
                    type:"和牛",
                    price:2220,
                },
                {
                    name:"壽司",
                    type:"生魚片",
                    price:1520
                },
            ],
            arr3:[1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<template>
    <h3>V-for</h3>
    <!-- arr -->
    <p v-for="item in arr">{{item}}</p>
    <p v-for="(item,index) in arr">{{item}}</p>

    <!-- arr2 -->
    <ol v-for="element in arr2">
        <li>{{ element.name }}</li>
        <li>{{ element.type }}</li>
        <li>{{ element.price }}</li>
        <p>-----------------------</p>
    </ol>
    <div class="big">
    <div class="cool" v-for="item in arr"></div>
</div>
    <!-- <select name="" id=""></select>
        <option value="">請選擇</option>
        <option v-for="xxx in arr3" value="">{{xxx}}</option> -->
</template>

<style scoped lang="scss">
.big{
    display: flex;
.cool{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-bottom: 5px;
}
}
</style>