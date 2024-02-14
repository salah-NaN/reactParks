import PARKS from './utils/parks'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import MyContext from './utils/MyContext';
export default function Parks() {
    const contexto = useContext(MyContext)
    const {idiom: i, setIdiom: setI} = contexto;

    const objParam = useParams();
    const nom = objParam.nom;

    const actualPark = PARKS.find(park => park.nom == nom)
    console.log(actualPark)
    return (
        <div className=" mx-auto p-4 bg-slate-600">
            <h2 className=' text-white w-fit mx-auto border-l-4 border-white text-3xl font-bold p-3   '>{i == 'ca' ? actualPark.title.catalan : actualPark.title.original}</h2>
            <div className=' px-14 py-4   flex flex-col  '>
                <img className=' object-contain w-full rounded-xl mb-7 ' src={actualPark.image}></img>
                <p className='text-white relative w-full text-justify indent-14 text-balance text-base font-medium ' >{i == 'ca' ? actualPark.description.catalan : actualPark.description.original}</p>
            </div>
        </div>

    )
}