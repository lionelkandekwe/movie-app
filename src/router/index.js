import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MovieDetail from "../views/MovieDetail.vue"
import BookmarkedMovie from "../views/BookmarkedMovie.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: MovieDetail,
  },
  {
    path: "/movie/bookmarked",
    name: "Bookmarked Movie",
    component: BookmarkedMovie,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
