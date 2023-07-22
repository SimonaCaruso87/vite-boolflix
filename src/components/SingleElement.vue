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

    }
};

</script>

<template>

    <div>
        <ol>
            <li>
                <img :src="` https://image.tmdb.org/t/p/w342${elementData.poster_path}`" alt="">
            </li>
            <li>
                <!-- {{ typeof elementData.title != undefined ? elementData.title : elementData.name }} -->
                {{ elementData.title ?? elementData.name }}
            </li>
            <li>
                {{ elementData.original_title ?? elementData.original_name }}
            </li>
            <li>
                <img :src="flag" alt="">                    
            </li>
            <li>
                {{ elementData.vote_average }}
            </li>
            <li>
                
            </li>
            <hr>
        </ol>
    </div>

    <!-- <div class="card">
        <div class="image-wrapper">
            <img :src="singleComponent.results[0].title" :alt="singleComponent.original_title">
        </div>
        <div class="info-card">
        <h5>
            {{ SingleElement.title }}
        </h5>
        <h6>
            {{ SingleElement.original_title }}
        </h6>
        </div>
    </div> -->

</template>

<style lang="scss" scoped>

div{
    color:white;
}

        // .card{
        //     width:calc((100% - 50px) / 5);
        //     margin: 5px;
        //     .info-card{
        //         height: 100px;
        //         background-color: #D48F38;
        //     }

        //     .image-wrapper{
        //             width:100%;

        //             img{
        //                 width: 100%;
        //                 height:100%;
        //                 object-fit: cover;
        //             }
        //         }
        //  }

</style>