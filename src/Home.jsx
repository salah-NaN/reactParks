import { useContext } from "react"
import MyContext from "./utils/MyContext"

export default function Home() {


  const {idiom: i, setIdiom: setI} = useContext(MyContext)
  return (
    <>

      <div className=" mx-auto p-4 bg-slate-600 ">
        <div className=' px-14 py-4   flex flex-col  '>
          <img className=' object-contain w-full rounded-xl mb-7 ' src='/portada.webp'></img>
          <p className='text-white relative w-full text-justify indent-14 text-balance text-base font-medium ' >{i == 'ca' ? "T'agrada la natura? Has de saber que, encara que visquis a Barcelona oa la seva àrea metropolitana, a prop de la ciutat trobaràs espais naturals que són perfectes per perdre's i gaudir d'un dia a l'aire lliure. En aquest llistat de Salir.com hem recopilat els millors parcs naturals a prop de Barcelona i el més llunyà de tots és a menys d'1 hora i mitja, per tant, podràs fer una escapada tranquil·lament d'un dia. Tots aquests espais són ideals per descobrir al costat dels teus amics o família i t'ofereixen bells racons on la natura mostra la millor faceta. Descobreix-los!" : '¿Te gusta la naturaleza? Debes saber que, aunque vivas en Barcelona o en su área metropolitana, cerca de la ciudad encontrarás espacios naturales que son perfectos para perderse y disfrutar de un día al aire libre. En este listado de Salir.com hemos recopilado los mejores parques naturales cerca de Barcelona y el más lejano de todos está a menos de 1 hora y media, por tanto, podrás hacer una escapada de un día tranquilamente. Todos estos espacios son ideales para descubrir junto a tus amigos o familia y te ofrecen bellos rincones donde la naturaleza muestra su mejor faceta. ¡Descúbrelos!'}</p>
        </div>
      </div>
    </>
  )
}