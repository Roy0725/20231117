<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(counter,["setLocation"])
    },
    mounted(){
        this.setLocation(12)
    },
}
</script>

<template>
<div class="header">
    <div class="left">
        <a href="#">Logo</a>
    </div>
    <div class="right">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
    </div>
</div>

<div class="background"></div>

<div class="about">
    <h1>About Me</h1>
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
body{
    margin: 0;
}

.header{
    display: flex;
    justify-content: space-between;
    background-color: #5b21b6;

    .left{
        padding: 30px 100px;
        font-size: 30pt;
        a{
            text-decoration: none;
        }
    }
    .right{
        
        ul{
            // margin-top: 10% ;
            display: flex;
            flex-direction:row;
            
            li{
                list-style: none; //去點
                padding: 30px;
                font-size: 20pt;
            a{
                // color: #0f172a;
                text-decoration: none;
                color: #FFF;
                font: 20px Raleway;
                margin: 0px 10px;
                padding: 10px 10px;
                position: relative;
                z-index: 0;
                cursor: pointer;

                &::before{
                    content: '';
                    left: 0px;
                    top: 0px;
                }
                &::before{
                    position: absolute;
                    opacity: 0.5;
                    height: 100%;
                    width: 2px;
                    content: '';
                    background: #0f172a;
                    transition: all 0.3s;
                }
                &::after{
                    content: '';
                    right: 0px;
                    bottom: 0px;
                }
                &::after{
                    position: absolute;
                    opacity: 0.5;
                    height: 100%;
                    width: 2px;
                    content: '';
                    background: #0f172a;
                    transition: all 0.3s;
                }
                &:hover::before{
                    opacity: 1;
                    height: 2px;
                    width: 100%;
                }
                &:hover::after{
                    opacity: 1;
                    height: 2px;
                    width: 100%;
                }
            }        
        }
        }
    }
}
.about{
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