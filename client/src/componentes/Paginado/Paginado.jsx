import React from 'react'
import "./paginado.css"

export default function Paginado({pokemonPorPagina,allPokemon,paginado}) {
    const numerosDePagina= []

    for (let i = 1; i <= Math.ceil(allPokemon/pokemonPorPagina); i++) {
        numerosDePagina.push(i)
        
    }
  return (
    <nav className='paginacion'>
        <ul>
            {
            numerosDePagina&&
            numerosDePagina.map(numeros=>(
                <li className='number' key={numeros}>
                    <button onClick={()=>paginado(numeros)}>{numeros}</button>
                </li>
                ))
            }
        </ul>
    </nav>
  )
}
