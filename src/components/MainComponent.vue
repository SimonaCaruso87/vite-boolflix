<script>

import CharacterFilm from './CharacterFilm.vue';
import { store } from '../store.js';


export default{
    name: "MainComponent",
    components:{
      CharacterFilm
    },
    data(){
        return{
           store
        }
    },
    methods:{

    }
}
</script>

<template>

    <main class="bg-dark" >
        <select v-model="store.selectFilm" @change="$emit('selectFilm')" class="select-card border-1 rounded-1" name="card" id="card">
            <!-- fare un v-bind prima di value affinchè sottometta il form -->
            <option :value="singleFilm.archetype_name" v-for="(singleFilm , index) in store.titleArray" :key="index">
                {{singleFilm.archetype_name}}
            </option>
        </select>
        <section class="bg-dark">
            <div class="container-film">

                <div class="section-top">
                <h6>
                    ORIGINALI NETFLIX
                </h6>
                </div>
                <div class="film">
                    <CharacterFilm
                    v-for="(singleFilm, index) in store.theMovieArray " 
                    :key="index" 
                    :singleComponent='singleFilm'
                    />
                </div>
            </div>
        </section>    
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