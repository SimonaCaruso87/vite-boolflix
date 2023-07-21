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
     prevent(e){
         e.preventDefault();
        }
   


    },
};
</script>

<template>

    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img style="width: 100px;" src="../assets/img/logo.jpg" alt="Netflix">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Serie Tv</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form 
      @submit.prevent="event" 
      class="d-flex" 
      role="search">
        <input 
        @change="$emit('performanceSearch')"
        v-model="store.searchText"
        class="form-control me-2" 
        type="input" 
        placeholder="Cerca..." 
        aria-label="Search">
        <button 
        @click="$emit('performanceSearch')"
        class="btn btn-outline-warning" 
        type="button">Cerca</button>
      </form>
    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped>

header{

    img{
        width: 100px;
    }
}

</style>