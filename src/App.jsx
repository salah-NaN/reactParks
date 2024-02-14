import { Outlet, Link } from "react-router-dom";
import PARKS from './utils/parks'
import { useState } from "react";
import MyContext from './utils/MyContext'
import './App.css'


function App() {
  const [idiom, setIdiom] = useState("ca")
  const packIdiom = {
    idiom,
    setIdiom
  }


  return (
  <MyContext.Provider value={packIdiom}>
  <>
  <div className="absolute right-6 ml-2 top-2">
    <button disabled={idiom == 'es'} onClick={()=> setIdiom('es')} className=" font-thin ml-2 text-slate-800 p-2">ES</button>
    <button disabled={idiom == 'ca'} onClick={()=> setIdiom('ca')} className=" font-thin ml-2 text-slate-800 p-2">CA</button>
  </div>    <h1 className=" w-4/5 p-3 mx-auto mt-7 mb-14 border-double border-4 border-slate-900 font-medium text-5xl text-slate-800 bg-gray-200">{idiom == 'ca' ? 'Els millors parcs naturals a prop de Barcelona' : 'Los mejores parques naturales cerca de Barcelona'}</h1>

    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-3 ">
        <Link className="block w-3/4 mb-7 px-3 py-2 bg-slate-600 text-white
        hover:bg-slate-800 hover:transition-all duration-300" to='/'>Home</Link>

        <nav className="w-3/4 px-4 py-2 flex flex-col list-decimal border-2 border-slate-600 bg-slate-300 text-left ">
          {PARKS.map(park => <Link key={park.id} className="py-1 hover:text-slate-500 hover:transition-all duration-400" to={`/parks/${park.nom}`} >{park.nom}</Link>)}
        </nav> 
      </div>

      <div className="col-start-4 col-span-9">
        <Outlet />
      </div>

    </div>
  </>
  </MyContext.Provider>

  )

}

export default App
