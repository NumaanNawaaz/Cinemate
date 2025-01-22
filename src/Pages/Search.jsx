import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card"
import { useFetch } from "../Hooks/useFetch";
import { useEffect } from "react";
export const Search = ({apiFetch}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiFetch , queryTerm)
   useEffect(() =>{
    document.title = `Result for ${queryTerm}/Cinemate`
  })
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <p className="text-3xl text-gray-700">{movies.length==0 ?`No Result Found For "${queryTerm}"`:`Result for ${queryTerm}`}</p>
      </section>
       <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) =>(
            <Card key={movie.id} movie={movie} />
          ))}
          
          
        </div>
      </section>
    </main>
  )
}

