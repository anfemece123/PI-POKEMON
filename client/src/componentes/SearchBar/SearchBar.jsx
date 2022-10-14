import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNamePokemon } from '../../redux/actions'

export default function SearchBar() {
 
  const pokemons= useSelector((state)=>state.pokemon)

    const dispatch=useDispatch()
    const [name, setname] = useState("")

    // console.log('pokemon name',statePokemon)

    function handleInputChange(e){
        e.preventDefault()
        setname(e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
    };

    function handleSubmit(e){
      e.preventDefault()
      if(!pokemons.find(e=>e.name.toLowerCase()===name.toLowerCase())){
        alert("El pokemon no existe")
    }else{
      dispatch(getNamePokemon(name))
      setname("")

    }
    
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>

        <input 
          type="text"
          placeholder='Buscar pokemon...'
          onChange={(e)=>handleInputChange(e)}
          value={name}
          />
         <button 
          type='submit'>Buscar</button>
        </form>
    </div>
  )
}
