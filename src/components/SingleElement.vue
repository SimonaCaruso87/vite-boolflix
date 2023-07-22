<script>

import { store } from '../store.js';

export default{
    name: "SingleElement",
    data(){
        return{
           
        }
    },
    props: {
            // possiamo passare Object String Number Booleano Array
            elementData : {
                type: Object ,
                default: null
            }
        },
    computed:{
        flag() {
           if (this.elementData.original_language == 'it') {
            return 'https://flagsapi.com/IT/flat/64.png';
           }
           else if (this.elementData.original_language == 'en') {
             return 'https://flagsapi.com/GB/flat/64.png';
           }
           else if (this.elementData.original_language == 'jp') {
             return 'https://flagsapi.com/JP/flat/64.png';
           }
           else if (this.elementData.original_language == 'fr') {
             return 'https://flagsapi.com/FR/flat/64.png';
           }
           else{
             return 'https://flagsapi.com/JP/flat/64.png';
           }
        
        },
     vote(){
        return Math.ceil(this.elementData.vote_average / 2);
     }

    }
};

</script>

<template>
        <div class="col">
            <div class="card">
                <div class="image-wrapper">
                        <img :src="`https://image.tmdb.org/t/p/w342${elementData.poster_path}`" alt="elementData.name">
                </div>
                    <div class="info-card">
                        <h6>
                        {{ elementData.title ?? elementData.name }}
                        </h6>
                        <h6>
                        {{ elementData.original_title ?? elementData.original_name }}
                        </h6>
                        <div>
                            <img :src="flag" alt="">                    
                        </div>
                        <span v-for="numero in vote" :key="numero">
                            ★
                        </span>
                        <span v-for="numero in (5- vote)" :key="numero">
                            ☆
                        </span>     
                    </div>
            </div>
        </div>   
        

</template>

<style lang="scss" scoped>

div{
    color:white;
}

        .card{
            width:calc(100% / 3);
            margin: 5px;
            .info-card{
                background-color: black;
            }

            .image-wrapper{
                    width:100%;

                    img{
                        width: 100%;
                        height:100%;
                        object-fit: cover;
                    }
                }
         }

</style>