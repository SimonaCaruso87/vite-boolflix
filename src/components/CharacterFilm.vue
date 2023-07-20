<script>

// import { store } from '../store.js';

export default{
    name: "CharacterFilm",
    data(){
        return{
           
        }
    },
    methods:{

    },
    props: {
    // possiamo passare Object String Number Booleano Array
       singleComponent : {
        type: Object ,
        default:null
       }
    }
}
</script>

<template>

    <div class="card">
        <div class="image-wrapper">
            <img :src="singleComponent.results[0].title" :alt="singleComponent.original_title">
        </div>
        <div class="info-card">
        <h5>
            {{singleComponent.title}}
        </h5>
        <h6>
            {{singleComponent.original_title}}
        </h6>
        </div>
    </div>

</template>

<style lang="scss" scoped>

        .card{
            width:calc((100% - 50px) / 5);
            margin: 5px;
            .info-card{
                height: 100px;
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