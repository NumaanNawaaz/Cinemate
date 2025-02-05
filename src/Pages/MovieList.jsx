
import { useEffect } from "react";
import Card from "../Components/Card"
import { useFetch } from "../Hooks/useFetch";
export const MovieList = ({apiFetch , title}) => {
  const { data: movies } = useFetch(apiFetch)
   useEffect(() =>{
    document.title = `${title}/Cinemate`
  })
  return (
    <main> 
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) =>(
            <Card key={movie.id} movie={movie} />
          ))}
          
          
        </div>
      </section>
    </main>
  )
}

