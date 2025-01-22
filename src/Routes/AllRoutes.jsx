import  { Routes , Route } from 'react-router-dom'
import { MovieDetail } from "../Pages"
import { Search } from "../Pages"
import { PageNotFound } from '../Pages'
import { MovieList }  from '../Pages'


function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<MovieList apiFetch = "movie/now_playing" title="Home" />} />
      <Route path='/movie/:id' element ={<MovieDetail apiFetch = "movie/now_playing" />} />
      <Route path='movie/popular' element ={<MovieList apiFetch = "movie/popular" title="Popular" />} />
      <Route path='/movie/top' element ={<MovieList apiFetch = "movie/top_rated" title="Top Rated" />} />
      <Route path='/movie/upcoming' element ={<MovieList apiFetch = "movie/upcoming" title="Upcoming" />} />
      <Route path='search' element ={<Search apiFetch = "search/movie" title="Search" />} />
      <Route path='*' element ={<PageNotFound />} />
    </Routes>
     
    </>
  )
}

export default AllRoutes;
