<script>
import {mapState, mapActions} from 'pinia'
import counter from "../stores/counter"
export default{
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        goHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        this.setLocation(12)
    },
}
</script>

<template>
<div class="header">
    <div class="left">
        <a alt="Logo" @click="goHome">Logo</a>
    </div>
    <div class="right">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a alt="about">About</a></li>
            <li><a alt="contact">Contact</a></li>
        </ul>
    </div>
</div>

<div class="background"></div>

<div class="about">
    <!-- <h1>About Me</h1>
    <div class="top">
        <p>自我介紹</p>
    </div>
    <div class="middle">
        <p>學歷</p>
    </div>
    <div class="bottom">
        <p>經歷</p>
    </div> -->
    <div class="first">
        <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front">學歷</div>
                    <div class="back">Back</div>
            </div>
        </label>
    </div>

    <div class="second">    
        <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front">學歷</div>
                    <div class="back">Back</div>
                </div>
        </label>
    </div>

    <div class="third">
        <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front">學歷</div>
                    <div class="back">Back</div>
                </div>
        </label>
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
        padding: 20px 60px;
        // font-size: 30pt;
        a{
            color: #FFF;
            text-decoration: none;
            font: 50px Raleway;
            // margin: 0px 10px;
            // padding: 10px 10px;
            position: relative;
            z-index: 0;
            cursor: pointer;

            &::before,&::after{
                    content: "";
                    position: absolute;
                    top: 30px;
                    left: 50%;
                    width: 80px;
                    height: 80px;
                    border: 4px solid #0277bd;
                    transform: translateX(-50%) translateY(-50%) scale(0.8);
                    border-radius: 50%;
                    background: transparent;
                    opacity: 0;
                    transition: all 0.3s;
                    z-index: -1;
                }

            &::after{
                    content: "";
                    border-width: 5px;
                    transition: all 0.4s;
                }

            &:hover::before{
                        opacity: 1;
                        transform: translateX(-50%) translateY(-50%) scale(1);
                    }

            &:hover::after{
                        opacity: 1;
                        transform: translateX(-50%) translateY(-50%) scale(1.3);
            }
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
                &::before,&::after{
                    position: absolute;
                    opacity: 0.5;
                    height: 100%;
                    width: 5px;
                    content: '';
                    background: #0f172a;
                    transition: all 0.3s;
                }
                &::after{
                    content: '';
                    right: 0px;
                    bottom: 0px;
                }
                &:hover::before{
                    opacity: 1;
                    height: 5px;
                    width: 100%;
                }
                &:hover::after{
                    opacity: 1;
                    height: 5px;
                    width: 100%;
                }
            }        
        }
        }
    }
}
.about{
    widows: 100%;
    height: 600px;
    position: relative;
    
    .first{
    label {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        display: block;
        width: 300px;
        height: 200px;
        position: absolute;
        right: 20%;
        top: 30%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .card {
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: all 600ms;
        transition: all 600ms;
        z-index: 20;
    }

    .card div {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #FFF;
        text-align: center;
        line-height: 200px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 5px;
    }

    .card .back {
        background: #222;
        color: #FFF;
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }

    label:hover .card {
        -webkit-transform: rotateX(20deg);
        transform: rotateX(20deg);
        box-shadow: 0 20px 20px rgba(50,50,50,.2);
    }

    input {
        display: none;
    }

    :checked + .card {
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
    }

    label:hover :checked + .card {
        transform: rotateX(160deg);
        -webkit-transform: rotateX(160deg);
        box-shadow: 0 20px 20px rgba(255,255,255,.2);
    }
}
    .second{
    label {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        display: block;
        width: 300px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .card {
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: all 600ms;
        transition: all 600ms;
        z-index: 20;
    }

    .card div {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #FFF;
        text-align: center;
        line-height: 200px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 5px;
    }

    .card .back {
        background: #222;
        color: #FFF;
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }

    label:hover .card {
        -webkit-transform: rotateX(20deg);
        transform: rotateX(20deg);
        box-shadow: 0 20px 20px rgba(50,50,50,.2);
    }

    input {
        display: none;
    }

    :checked + .card {
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
    }

    label:hover :checked + .card {
        transform: rotateX(160deg);
        -webkit-transform: rotateX(160deg);
        box-shadow: 0 20px 20px rgba(255,255,255,.2);
    }
}
    .third{
    label {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        display: block;
        width: 300px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .card {
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: all 600ms;
        transition: all 600ms;
        z-index: 20;
    }

    .card div {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #FFF;
        text-align: center;
        line-height: 200px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 5px;
    }

    .card .back {
        background: #222;
        color: #FFF;
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }

    label:hover .card {
        -webkit-transform: rotateX(20deg);
        transform: rotateX(20deg);
        box-shadow: 0 20px 20px rgba(50,50,50,.2);
    }

    input {
        display: none;
    }

    :checked + .card {
        transform: rotateX(180deg);
        -webkit-transform: rotateX(180deg);
    }

    label:hover :checked + .card {
        transform: rotateX(160deg);
        -webkit-transform: rotateX(160deg);
        box-shadow: 0 20px 20px rgba(255,255,255,.2);
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
    // background-color: #5b21b6;
    // height: 80px;
    // position: fixed;
    // bottom: 0;
    // width: 100%;
    // p{
    //     margin-top: 1.5%;
    //     font-size: 18pt;
    //     color: whitesmoke;
    // }
}
</style>