import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getType,filterCreated, filterPokemonsByType,orderByNameOrStrengh, getPokemon} from '../../redux/actions'


export default function Filtros({setpaginaActual,setOrden}) {
    
    const dispatch= useDispatch()
    const types= useSelector((state)=>state.type)
   

    useEffect (()=>{
        dispatch(getType())
    },[dispatch])

    function handleFilterByType(e){
        dispatch(filterPokemonsByType(e.target.value));
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)

    }
    function handleSort(e){
        e.preventDefault();
        dispatch(orderByNameOrStrengh(e.target.value));
        setpaginaActual(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
 
    
  return (
    <div>
       
        <select onChange={e => handleFilterByType(e)}>
            <option value="All">all types</option>
                {
                    types.map( type => (
                        <option value={type.name} key={type.name}>{type.name}</option>
                    ))
                }
        </select>
        

        
        <select  onChange={e=> handleFilterCreated(e)}>
            <option value="All">All</option>
            <option value="Api">Pokemon existente</option>
            <option value="Created">Pokemon creado</option>
        </select>

        <select onChange={e => handleSort(e)}>
            <option value="normal">Normal</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="HAttack">Mayor Ataque</option>
            <option value="LAttack">Menor Ataque</option>
        </select>
                   
    </div>
  )
}
