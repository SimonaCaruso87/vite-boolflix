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
     <div class="row">
        <div class="col-12">
       <div class="image-wrapper">
            <img :src="`https://image.tmdb.org/t/p/w342${elementData.poster_path}`" alt="elementData.name">
       </div>
            <div class="info-card">
                <h6>
                <!-- {{ typeof elementData.title != undefined ? elementData.title : elementData.name }} -->
                {{ elementData.title ?? elementData.name }}
                </h6>
                <h6>
                {{ elementData.original_title ?? elementData.original_name }}
                </h6>
                <div>
                    <img :src="flag" alt="">                    
                </div>
                <div>
                    {{ Math.ceil(elementData.vote_average / 2) }}
                </div>
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
                background-color: #D48F38;
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