<script>

import CharacterFilm from './CharacterFilm.vue';
import { store } from '../store.js';


export default{
    name: "MainComponent",
    // components:{
    //   CharacterFilm
    // },
    data(){
        return{
           store
        }
    },
    methods:{
        getFlag(lang) {
           if (lang == 'it') {
            return 'https://flagsapi.com/IT/flat/64.png';
           }
           else if (lang == 'en') {
             return 'https://flagsapi.com/GB/flat/64.png';
           }
           else if (lang == 'jp') {
             return 'https://flagsapi.com/JP/flat/64.png';
           }
           else if (lang == 'fr') {
             return 'https://flagsapi.com/FR/flat/64.png';
           }
           else{
             return 'https://flagsapi.com/JP/flat/64.png';
           }
        //    else{
        //     return '' ;
        //    }
        }

    },
    
}
</script>

<template>
<main>
    <ul>
        <li 
        v-for="(movie , i) in store.movies" 
        :key="i">
             <ol>
                <li>
                    {{ movie.title }}
                </li>
                <li>
                    {{ movie.original_title }}
                </li>
                <li>
                    <img :src="getFlag(movie.original_language)" alt="">                    
                </li>
                <li>
                    {{ movie.vote_average }}
                </li>
             </ol>
        </li>
    </ul>
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