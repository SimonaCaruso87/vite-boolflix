<script>
// importiamo lo store per creare ciclo array per riempire l'input
import { store } from '../store.js';

export default{
    name: "HeaderComponent",
    data(){
        return{
            // cosi' ci ritorna lo store
          store
        }
    },
    methods:{

    }
}
</script>

<template>

    <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand text-warning ps-3" href="#">BOOLFIX</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <!-- per creare un filtro inserire un v-model nella select + inserire @click e dentro evento da intercettare-->
                        <form class="form-inline my-2 my-lg-0 d-flex">
                            <input  
                            v-model="store.titleArray" 
                            class="form-control my-sm-0 mr-sm-2" 
                            type="search" 
                            placeholder="Search Film or Series..." 
                            aria-label="Search">
                                <!-- dentro @click=$emit inseriamo un evento customs  -->
                                <button 
                                @click="$emit('reserchTitle')"  
                                class="btn btn-outline-warning my-sm-0 m-4" 
                                type="submit">
                                Search
                                </button>
                        </form>
                    </div>
            </nav>
    </header>

</template>

<style lang="scss" scoped>

header{
    
}

</style>