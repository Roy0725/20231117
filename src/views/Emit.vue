<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import child2 from '../components/child2.vue'
export default{
    data(){
        return{
            getText:"",
        }
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        emitObj(para){
            console.log(para);
            this.getText = para
        }
    },
    components:{
        child2
    },
    mounted(){
        this.setLocation(9)
    }
}
</script>

<template>
<div class="showArea">
    <h1>Emit</h1>
    {{ this.getText }}
    <!-- 變數名稱注意別相衝 -->
    <child2 @bodhi="emitObj"/>
</div>
</template>

<style scoped lang="scss">
.showArea{
    width: 800px;
    height: 600px;
    margin: 0 auto;
}
</style>