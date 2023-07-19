// importiamo il componente store 
import { reactive } from 'vue';
// creiamo una bacheca , una fonte condivisa tra i vari componenti, con una variabile globale 
export const store = reactive({
    // in questo caso specifico creiamo un array vuoto
    // es searrchText , searchStatus , charachters , loading  
    theMovieArray: [],
    titleArray: '',
    selectFilm:[]
});