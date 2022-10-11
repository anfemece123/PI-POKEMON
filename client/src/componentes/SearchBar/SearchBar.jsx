import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNamePokemon } from '../../redux/actions'

export default function SearchBar() {

    const dispatch=useDispatch()
    const [name, setname] = useState("")

    // console.log('pokemon name',statePokemon)

    function handleInputChange(e){
        e.preventDefault()
        setname(e.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
    };

    function handleSubmit(e){
      e.preventDefault()
      if(name!== ""){
        dispatch(getNamePokemon(name))
        setname(" ")
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>

        <input 
          type="text"
          placeholder='Buscar pokemon...'
          onChange={(e)=>handleInputChange(e)}
          />
         <button 
          type='submit'>Buscar</button>
        </form>
    </div>
  )
}
