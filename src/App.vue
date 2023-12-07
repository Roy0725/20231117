<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue"
import darkModeMixin from './components/mixin/darkMode';

export default{

  mixins:[darkModeMixin],

  data(){
      return{
        darkMode:false
      }
  },
  methods:{
    goHome(){
      this.$router.push('/')
    },
    toggleMode(){
      this.darkMode = !this.darkMode
    },
    setLightMode(){
      this.darkMode = false
    },
  }
}
</script>

<template>
  <!-- <div class="header">
    <Header />
  </div> -->
  <div class="content" :class="{ 'dark-mode': darkMode }">
    <RouterView />
  </div>
  
  <div class="home">
    <i @click="goHome" class="fa-solid fa-house"></i>
  </div>

  <div :class="{ 'dark-mode': darkMode }">
  <div @click="toggleMode" class="icon">
    <i :class="{'fas fa-sun': darkMode, 'fas fa-moon':!darkMode}"></i>
  </div>
</div>

</template>

<style scoped lang="scss">
// .header{
//   width: 100vw;
//   height: 20vh;
// }

html{
  height: 100%;
  overflow: hidden;
}

body{
    margin: 0;
    padding:0;
	  perspective: 1px;
	  transform-style: preserve-3d;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.content{
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: auto;
}

.home{
    font-size: 36pt;
    position: fixed;
    bottom: 20%;
    right: 5%;
    color: #181991;
    cursor: pointer;
    opacity: 0;
    z-index: 1;

    &:hover{
    transition: all 0.3s;
    opacity: 1;
    transform: scale(1.2);
  }
}
.icon{
  font-size: 36pt;
  cursor: pointer;
  position: fixed;
  bottom: 10%;
  right: 5%;
  opacity: 0;
  z-index: 1;

  &:hover{
    transition: all 0.3s;
    opacity: 1;
    transform: scale(1.2);
  }
}
.dark-mode {
  background-color: #1f1f1f; /* 深色背景 */
  color: #ffffff; /* 深色文字 */
  /* 你可以添加其他深色樣式 */
}
</style>
