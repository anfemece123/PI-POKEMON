import React from 'react'
import Card from '../Card/Card'
import {Link} from 'react-router-dom'
import loadingImg from '../../media/loading.gif'
import style from './Cards.module.css'


export default function Cards({pokemonsActuales}) {

  return (
    <>
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
        </div>
    </>
  )
}
