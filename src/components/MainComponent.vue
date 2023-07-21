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
            const flags = {

            }
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
                    <img src="https://flagsapi.com/:IT/:style/:40px.png">                    {{ movie.original_language }}
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