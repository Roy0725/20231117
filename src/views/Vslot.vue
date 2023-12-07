<template>
        <VslotButton>
            <span>
                I am Horny!
            </span>
            <i class="fa-solid fa-heart"></i>
        </VslotButton>

        <VslotNamed>
            <template v-slot:header>
                <h1>VslotNamed:Header</h1>
            </template>
            <template v-slot:footer>
                <h1>Vslot:Footer</h1>
            </template>

            <h2>No Name</h2>
        </VslotNamed>

        <VslotNamed v-for="item in arr">
            <template v-slot:[item.type]>
                <h1>{{ item.name }}</h1>
            </template>
        </VslotNamed>
        <ScopedSlot v-slot="slotProps">
            <h1>V-slot="slotProps"</h1>
            {{ slotProps.text }} & {{ slotProps.count }}
        </ScopedSlot>
        <ScopedSlot v-slot="{text,count}">
            <h1>V-slot="{text,count}"</h1>
            {{ text }} And {{ count }}
        </ScopedSlot>
        <button @click="openModel">BTN</button>
        <VslotModel v-show="isShow" @alertMessage="openModel">

        </VslotModel>
</template>
<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import VslotButton from '../components/VslotButton.vue'
import VslotNamed from '../components/VslotNamed.vue'
import ScopedSlot from '../components/ScopedSlot.vue'
import VslotModel from '../components/VslotModel.vue'

export default {
    data(){
        return{
            arr:[{
                type:"header",
                name:"Ahoy"
            },
            {
                type:"footer",
                name:"Horny"
            }],
            isShow:false
        }
    },
    methods:{
        ...mapActions(counter, ['setLocation']),
        openModel(){
            this.isShow = !this.isShow
        }
    },
    components:{
        VslotButton,
        VslotNamed,
        ScopedSlot,
        VslotModel,
    },
    mounted(){
        this.setLocation(14)
    }
}
</script>
<style lang="scss" scoped>
    .fa-solid{
        color: red;
    }
</style>