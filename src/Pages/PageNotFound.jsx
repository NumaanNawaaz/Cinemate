import { useEffect } from "react"
import pnf from "../assets/pnf.jpg"
import { Link } from "react-router-dom"
export const PageNotFound = () => {
  useEffect(() =>{
    document.title = `Page Not Found/Cinemate`
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-slate-600 text-7xl my-10 dark:text-white">404 Oops!</p>
          <div className="max-w-lg">
          <img className="rounded" src={pnf} alt="Page Not Found" />
          </div>
          
        </div>
        <div className="flex flex-col items-center my-4">
          <Link to="/">
          <button className="w-64 text-slate-100 text-xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Go To HomePage</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

