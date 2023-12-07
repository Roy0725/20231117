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
<div id="title" class="header">
    <div class="fixed">
    <div class="left">
        <a alt="Logo" @click="goHome">Roy</a>
    </div>
    <div class="right">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</div>
</div>

<h1>About Me</h1>
<div class="about" id="about">
    <div class="leftA">
        <h1>學歷</h1>
        <p>OO高職</p>
        <p>XX大學</p>
    </div>

    <div class="rightA">
        <p>背景圖片</p>
    </div>
    <!-- <div class="cards">
        <div id="slide1" class="first"> -->
        <!-- <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front"></div>
                    <div class="back"></div>
            </div>
        </label> -->
    <!-- </div>
</div> -->
    <!-- <div class="exprience">
    <div id="slide2" class="second"> -->
        <!-- <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front"></div>
                    <div class="back"></div>
                </div>
        </label> -->
    <!-- </div>
</div> -->
    <!-- <div id="slide3" class="third"> -->
         <!-- <label> 
            <input type="checkbox"  />
                <div class="card">
                    <div class="front"></div>
                    <div class="back"></div>
                </div>
        </label>  -->
        <!-- </div> -->
</div>



<div class="fourth" id="contact">
    <div class="contact">
        <h1>Contact</h1>
        <span>
            <input class="basic-slide" id="name" type="text" placeholder="Your name" /><label for="name">Name</label>
        </span>
        <span>
            <input class="basic-slide" id="email" type="text" placeholder="Your email" /><label for="email">Email</label>
        </span>
        <span>
            <input class="basic-slide" id="phone" type="text" placeholder="You Phone Number" /><label for="phone">Phone</label>
        </span>
        <span>
            <input class="basic-slide msg" id="message" type="text" placeholder="Leave us a message" /><label for="message">message</label>
        </span>
        <input type="button" value="Submit" class="button">
    </div>
</div>


<div class="floor">
    <!-- <p>© 2023 by Roy</p> -->
</div>
</template>

<style scoped lang="scss">

.header{
    // background-color: #5b21b6;
    // width: 100%;
    height: 100px;
    position: relative;
    // background-image: url('https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    // background-attachment: fixed;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // min-height: 20%
}
.fixed{
    display: flex;
    justify-content: space-between;

.left{
    padding: 20px 60px;
    a{
        // color: black;
        text-decoration: none;
        font: 50px Raleway;
        // margin: 0px 10px;
        // padding: 10px 10px;
        position: relative;
        z-index: 0;
        cursor: pointer;
        color: #FFF;

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
        margin-left: 800px;
        ul{
            display: flex;
            flex-direction:row;
            
            li{
                list-style: none; //去點
                padding: 30px;
                font-size: 20pt;
                a{
                    // color: #FFF;
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
                        background: #FFF;
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
        height: 300px;
        background-color: #FFF;
            // background-image: url('https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            // background-attachment: fixed;
            // background-position: center;
            // background-repeat: no-repeat;
            // background-size: cover;
            // min-height: 100%;
            display: flex;
            justify-content: space-around;
            text-align: center;
            padding: 5vmin;

        
        .cards{
            // widows: 100%;
            // height: 600px;
            position: relative;
            z-index: 1;
    .first{
        background-image: url('https://images.pexels.com/photos/47424/pexels-photo-47424.jpeg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100%;

    label {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        display: block;
        width: 300px;
        height: 200px;
        position: absolute;
        right: 10%;
        top: 80%;
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
}

@mixin epic-sides() { // https://codepen.io/MichaelArestad/pen/qltuk
    position: relative;
    z-index: 1;

    &:before {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        // left: -5000px;
        height: 100%;
        // width: 15000px;
        z-index: -1;
        @content;
    }
}

.contact {
//   max-width: 800px;
  margin: 0 auto;
  padding: 60px 30px;
  background: #2563eb;
  @include epic-sides() {background: inherit;}
  text-align: center;
  
  &:first-child {
    padding: 40px 30px;
  }
  &:nth-child(2),
  &:nth-child(8),
  &:nth-child(10){
    background: #134A46;
  }
  &:nth-child(3),
  &:nth-child(7) {
    background: #377D6A;
  }
  &:nth-child(4),
  &:nth-child(6) {
    background: #7AB893;
  }
  &:nth-child(5) {
    background: #B2E3AF;
  }
  }

  span {
    position: relative;
    display: inline-block;
    margin: 30px 10px;
  }

.basic-slide {
  display: inline-block;
  width: 215px;
  padding: 10px 0 10px 15px;
  font-family: "Open Sans", sans;
  font-weight: 400;
  color: #377D6A;
  background: #efefef;
  border: 0;
  border-radius: 3px;
  outline: 0;
  text-indent: 70px; // Arbitrary.
  transition: all .3s ease-in-out;
  
  &::-webkit-input-placeholder {
    color: #efefef;
    text-indent: 0;
    font-weight: 300;
  }

  + label {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgba(19,74,70,.4);
    background: #7AB893;
    transition: all .3s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
}

.basic-slide:focus,
.basic-slide:active {
  color: #377D6A;
  text-indent: 0;
  background: #fff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  
  &::-webkit-input-placeholder {
    color: #aaa;
  }
  + label {
    transform: translateX(-100%);
  }
}
.button{
    // margin-top: 2%;
    font-size: 18pt;
    border-radius: 10px;
    border: 0;
    background-color: #2563eb;
    color: whitesmoke;


    &:hover{
        transform:translate(0.5s);
        background-color: #377D6A;
        opacity: 1;
    }
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