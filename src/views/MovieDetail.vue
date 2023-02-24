<template>
  <div class="movie-detail">
   <h2>{{ movie.Title }}</h2>
   <div class="year-duration">
    <p class="text-bold">{{ movie.Year }}</p>
    <p class="text-bold">{{ movie.Runtime }}</p>
   </div>
   
   <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
   <p>{{ movie.Plot }}</p>
   <p class="text-bold">Genre <span>{{ movie.Genre }}</span></p>
   <hr/>
   <p class="text-bold">Director <span>{{ movie.Director }}</span></p>
   <hr/>
   <p class="text-bold">Actors <span>{{ movie.Actors }}</span> </p>
   <hr/>
  </div>
</template>

<script>
import{ref,onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
import env from'@/env.js'
export default {
  setup(){
    const movie=ref({});
    const route=useRoute();
    onBeforeMount(()=>{
      fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
      .then(response=>response.json())
      .then(data =>{
        movie.value=data
      })
    });
    return{
      movie
    }
  }
}
</script>

<style lang="scss">
.movie-detail{
  display: flex;
  flex-direction: column;
  padding: 16px;
  h2{
    color: #FFF;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .year-duration{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .featured-img{
   display: block;
    max-width: 400px;
    margin-bottom: 16px;
  }
  p{
    color: #FFF;
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 10px;
    span{
      color: #77bbe6;
      
    }
  }
  .text-bold{
    font-weight: bolder;
  }
}
</style>