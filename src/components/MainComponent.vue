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

    },
    // props:{
    //     singleFilm : Object
    // }
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
                    {{ movie.original_language }}
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
     padding: 40px 80px;

}
section{
    .container-film{
        margin:0 auto;
        background-color: white;
        padding:30px;
        .section-top{
        background-color:#212529;
        height:60px;
        h6{
            color:white;
            padding:20px;
        }
        }
         .film{
            display: flex;
            flex-wrap: wrap;
        }
    }
}

</style>