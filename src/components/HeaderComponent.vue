<script>
// importiamo lo store per creare ciclo array per riempire l'input
import { store } from '../store.js';

export default{
    name: "HeaderComponent",
    data(){
        return{
             store
        };
    },
    methods:{



    },
};
</script>

<template>

<header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand text-warning ps-3" href="#">
                    <img src="../assets/img/logo.jpg" alt="Netflix">
                </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Serie Tv</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Film
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Azione</a>
                                <a class="dropdown-item" href="#">Romantici</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Thriller</a>
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0 d-flex">
                            <!-- Per intercettare quello che l'utente scrive in un input usiamo v-model -->
                            <input 
                            class="form-control mr-sm-2" 
                            type="text" 
                            placeholder="Cerca" 
                            aria-label="Search"
                            v-model="store.searchText">
                                <button 
                                @click="$emit('performanceSearch')"
                                class="btn btn-outline-warning my-2 my-sm-0 m-4 text-warning"
                                type="text">
                                Cerca
                                </button>
                        </form>
                    </div>
            </nav>
    </header>

</template>

<style lang="scss" scoped>

header{

    img{
        width: 100px;
    }
}

</style>