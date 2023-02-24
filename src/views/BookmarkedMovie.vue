<template>
  <div class="bookmark-container">
    <h2>Bookmarked Movies</h2>
    <ul>
      <li v-for="movie in bookmarkedMovies" :key="movie.imdbID">
        {{ movie.Title }} ({{ movie.Year }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup(){
    const bookmarkedMovies=()=>{
      const movies = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        try {
          const movie = JSON.parse(value);
          movies.push(movie);
        } catch (e) {
          console.warn(`Invalid bookmarked movie: ${key}`);
        }
      }
      return movies;
    }
    return{bookmarkedMovies}
  } 
}
</script>
<style lang="scss">
.bookmark-container{
  display: flex;
  justify-content: center;
  padding: 20px;
  h2{
  color: #FFF;
}
}

</style>