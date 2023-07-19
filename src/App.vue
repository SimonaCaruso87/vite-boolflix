<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// inserirlo tra graffe per distrutturare l'oggetto
import { store } from './store.js';
import axios from 'axios';



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

    reserchMovie(){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=a7327a260401072f9a6c5602bb9091a4&query=ritorno+al+futuro')
        .then(response => {
            // dopo il this ci richiamo lo store con la chiave creata in store.js
            this.store.theMovieArray = response.data.results
        })
    }
    

  }
  
    
}

</script>

<template>
<!-- il bottone che deve far partire una funzione sta in header , mentre la funzione sta in app , non avendo la funzione creiamo un evento customs da app dentro header e scatiamo la funzione in questo caso reserchMovie -->
<HeaderComponent @reserchTitle="reserchMovie()"/>
{{ store.theMovieArray }}

<MainComponent />

<FooterComponent />


</template>

<style lang="scss">
@use "assets/scss/main" as*;
</style>
