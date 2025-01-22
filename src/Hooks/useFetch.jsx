import { useState , useEffect } from "react"

export const useFetch = (apiFetch ,queryTerm="") => {
    const [data , setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiFetch}?api_key=9f64fe8d2389772a442b7e5f596822d3&query=${queryTerm}`
    useEffect(() =>{
        async function fetchMovies() {
          const response = await fetch(url);
          const son = await response.json();
          setData(son.results);
          
        }
        fetchMovies();
      },[url])
  return (
    {data}
  )
}
