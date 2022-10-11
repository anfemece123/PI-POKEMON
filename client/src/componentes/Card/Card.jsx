import React from 'react'
import style from './Card.module.css'


export default function Card({name,img,types,id,attack,defense,hp}) {
    
    const typesColors={
        fire: style.fire,
        normal: style.normal,
        fighting: style.fighting,
        flying: style.flying,
        ground: style.ground,
        poison: style.poison,
        rock: style.rock,
        bug: style.bug,
        ghost: style.ghost,
        steel: style.steel,
        water: style.water,
        grass: style.grass,
        electric: style.electric,
        psychic: style.psychic,
        ice: style.ice,
        dragon: style.dragon,
        dark: style.dark,
        fairy: style.fairy,
        unknown: style.unknown,
        shadow: style.shadow
    }

 return (
   

  <div className={style.card}>
      <div className={style.card_image}>
          <img src={img} alt="img not foud"/>
      </div>
      
      <div className={style.card_text}>
          <h2>{name}</h2>
          {
              types ? types.map( el => {
                  return(
                
                      <p>{el.name}</p>
                      )   
                    }
                    ) :
                    <span>Types not found</span>
                }
      </div>
      <div className={`${style.card_stats} ${typesColors[types[0].name]}`}>
        <div className={style.stat}>
            <div className={style.value}>{attack}</div>
            <div className={style.type}>Ataque </div>
        </div>
        <div className={style.stat}>
            <div className={style.value}>{defense}</div>
            <div className={style.type}>Defensa </div>
        </div>
        <div className={style.stat}>
            <div className={style.value}>{hp}</div>
            <div className={style.type}>Vida </div>
        </div>

      </div>
    
  </div>
  )
}
