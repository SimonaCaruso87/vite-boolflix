<script>

import { store } from '../store.js';
import SingleElement from './SingleElement.vue';



export default{
    name: "MainComponent",
    components:{
      SingleElement
    },
    data(){
        return{
           store
        }
    },
    methods:{

    

    },
}

</script>

<template>
    <main>
        <div class="container">
            <div v-for="(movie , i) in store.movies" 
                :key="i">
                <SingleElement :elementData="movie"/>
            </div>
            <div v-for="(singleSeries , i) in store.series" 
            :key="i">
            <SingleElement :elementData="singleSeries"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

main{
     
    background-image: url(../assets/img/sfondo-new.jpg);
    background-repeat:no-repeat;
    background-size: cover;
    height:900px;
        
}

</style>