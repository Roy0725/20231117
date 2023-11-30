<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{

        }
    },
    // methods:{
    //     ...mapActions(counter,["location","locationInfo"])
    // },
    // mounted(){
    //     this.setLocation(1)
    // },
}
</script>

<template>
<div class="header">
    <div class="left">
        <p>Sample</p>
    </div>
    <div class="right">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</div>

<div class="background"></div>

<div class="about">
    <div class="top">
        <p>自我介紹</p>
    </div>
    <div class="middle">
        <p>學歷</p>
    </div>
    <div class="bottom">
        <p>經歷</p>
    </div>
</div>

<div class="fourth">
    <form action="">
        <div class="contact">
            <label for="" class="label">Your Name</label>
            <input type="text">
            <label for="" class="label">Email</label>
            <input type="email">
            <label for="" class="label">Leave Messages</label>
            <input type="text">
        </div>
            <button type="submit" class="button">Submit</button>
    </form>
</div>


<div class="floor">
    <!-- <p>© 2023 by Roy</p> -->
</div>
</template>

<style scoped lang="scss">
.header{
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction:inherit;
    justify-content: center;
    .left{
        margin-top: 1.5%;
        margin-right: 50%;
    }
    .right{

        ul{
            margin-top: 10% ;
            display: flex;
            flex-direction:row;
        li{
            margin-left: 15%;
            list-style: none; //去點
        }
        }
    }
}

.contact{
    width: 20%;
    margin-left: 40%;
    // display: flex;
    justify-content: center;
    flex-direction: column;
    .label{
        display: flex;
        margin-left: 7%;
        margin-top: 7%;
    }
}
.button{
    margin-top: 2%;
    font-size: 16pt;
    background-color: #0891b2;
    color: whitesmoke;
}
.floor{
    background-color: #5b21b6;
    height: 80px;
    position: absolute;
    bottom: 0;
    width: 100%;
    p{
        margin-top: 1.5%;
        font-size: 18pt;
        color: whitesmoke;
    }
}
</style>