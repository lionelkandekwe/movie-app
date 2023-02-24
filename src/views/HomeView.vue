<template>
  <div class="home">
    <!-- <div class="feature-card">
      <router-link to="/movie/tt0409591" >
        <img src="https://i.ebayimg.com/images/g/tbgAAOSww35gguVc/s-l1600.jpg" alt="Naruto Poster" class="featured-img">

        <div class="detail">
          <h3>Naruto</h3>
          <p>THE Description Naruto movie</p>
        </div>
      </router-link>
    </div> -->

    <form @submit.prevent="SearchMovies()" class="search-box" >
      <input type="text" placeholder="Search a movie by title..." name="" id="" v-model="search" />
      <input type="submit" value="Search"/>
      <router-link to="/movie/bookmarked">
        <input type="submit" value="Bookmarked Movies"/>
      </router-link>
      
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
       <router-link :to="'/movie/'+ movie.imdbID" class="movie-link" >
        <div class="product-image">
          <img :src="movie.Poster" alt="Movie Poster"/>
          <div class="type">{{movie.Type}}</div>
        </div>
        <div class="detail">
           <p class="year">{{movie.Year}}</p>
           <h3>{{movie.Title}}</h3>
        </div>
        <button class="bookmark-btn" @click="bookmarkMovie(movie)">Bookmark Movie</button>

       </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
// import {useRoute} from 'vue-router'
import env from'@/env.js'
import localStorage from 'localStorage';
export default {
setup(){
  const search=ref("");
  const movies=ref([]);
  

  const SearchMovies=()=>{
if(search.value != ""){
  fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
  .then(response=>response.json())
  .then(data=>{
    movies.value=data.Search,
    search.value=""
  })
}
  }
  const bookmarkMovie=(movie)=>{
    const existingBookmark = localStorage.getItem(movie.imdbID);
  if (existingBookmark) {
    alert('This movie is already bookmarked!');
    return;
  }
  localStorage.setItem(movie.imdbID, JSON.stringify(movie));

  alert('Movie bookmarked!');
  }
  const goToBookmarked=()=>{
    
  }
  return{search,movies,SearchMovies,bookmarkMovie,goToBookmarked}
}

}
</script>

<style lang="scss">
.home{
  .feature-card{
    position: relative;
  }
  .featured-img{
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }
  .detail{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
    padding: 16px;
    z-index: 1;

    h3 {
      color: #FFF;
      margin-bottom: 16px;
    }
    
    p{
      color: #FFF;
    }
  }
  .search-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    input{
      display: block;
      appearance: none;
      border: none;
      background: none;
      outline: none;
      &[type="text"]{
        width: 100%;
        background-color:#FFF;
        color: rgb(59, 56, 56);
        padding: 10px 16px;
        border-radius: 14px;
        font-size: 20px;
        margin-bottom: 15px;
        transition: 0.4s;
        & ::placeholder{
          color: #f3f3f3;
        }
        & :focus{
          box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
        }
      }
      &[type="submit"]{
        width: 100%;
        margin-bottom: 15px;
        max-width: 300px;
        background-color: #badfba;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        transition: 0.4s;
        &:active{
          background-color: #3B8070;
        }

      }
    }
  }
  .movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 8px;
    .movie{
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
      .movie-link{
        display: flex;
        flex-direction: column;
        height: 100%;
        .product-image{
          display: block;
          position: relative;
          img{
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .type{
            position: absolute;
            padding: 8px 16px;
            background-color: #42B883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail{
          background-color: #496583;
          padding: 16px 8px;
          flex:  1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year{
            color: #AAA;
            font-size: 14px;
          }
          h3{
            color: #FFF;
            font-weight:  600;
            font-size: 18px;
          }
        }
        .bookmark-btn{
          background-color:#77bbe6;
          max-width: 400px;
          color: #FFF;
          border-radius: 8px;
          border: none;
          padding:  10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>