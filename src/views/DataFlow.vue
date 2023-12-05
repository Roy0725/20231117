<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import flowChild from '../components/flowChild.vue'
import flowChild2 from '../components/flowChild2.vue'

export default{
    data(){
        return{
            objInfo:{},
            change:false,
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        getInfo(x){
            console.log(x);
            this.objInfo = x
            console.log(this.objInfo);
            this.change = !this.change
        },
        chanPage(){
            this.change = !this.change
        }
    },
    mounted(){
        this.setLocation(10)
    },
    components:{
        flowChild,
        flowChild2,
    },
}
</script>

<template>
    <h1>DataFlow</h1>
    <h3>資料需求:姓名、手機、性別[radio]、地址、年齡</h3>
    <h3>change:{{ this.change }}</h3>

    <div class="showArea">
        <flowChild @get="getInfo" v-show="this.change == false"/>
        <flowChild2 v-bind="this.objInfo" v-show="this.change == true" @back="this.chanPage()"/>
    </div>
</template>

<style scoped lang="scss">
.showArea{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
</style>  