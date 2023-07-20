<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';
import { store } from './store.js';

export default{
  name:"App",
  components:{
     HeaderComponent ,
     MainComponent ,
     FooterComponent
  },
  data(){
    return{
        store
    }
  },
  methods:{
    search(){
        console.log(this.store.searchText);

        axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'a7327a260401072f9a6c5602bb9091a4',
                    query: this.store.searchText   
                }
            })
            .then(response => {
                console.log(response.data);

                this.store.movies = response.data.results;
            });
       },
    

  },
  
    
};

</script>

<template>

<HeaderComponent @performanceSearch="search()"/>

<MainComponent />

<FooterComponent />

</template>

<style lang="scss">
@use "assets/scss/main" as*;
</style>
