import React from 'react'
import Card from '../Card/Card'
import {Link} from 'react-router-dom'
import loadingImg from '../../media/loading.gif'
import pikachuTriste from '../../media/pikachuTriste.png'
import style from './Cards.module.css'
import { useSelector } from 'react-redux'



export default function Cards({pokemonsActuales}) {


  const pokemon= useSelector( ((state)=>state.pokemon))
  
  return (
    <>
    {
      pokemon.length>0 ?
    
        <div className={style.cards}>     
            {
            pokemonsActuales.length > 0 ? pokemonsActuales.map((elemento)=>
              <Link to={`/detail/${elemento.id}`}>

                <Card
                key={elemento.id}
                name={elemento.name}
                img={elemento.img}
                types={elemento.types}
                id={elemento.id}
                attack={elemento.attack}
                defense={elemento.defense}
                hp={elemento.hp}
                />
               </Link>
                
                )
                :
                <div className={style.imagen_not_found}>
                  <img src={pikachuTriste} alt="" width= "400px" />
              
                  <h2>POKEMON NO ENCONTRADO</h2>
                 
                </div>
               
            }
        </div>

        :<div className={style.imagen_load}>
        <img src={loadingImg} alt="" width= "400px" />

        <div className={style.loader}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
    </div>
    }
    </>
  )
}
