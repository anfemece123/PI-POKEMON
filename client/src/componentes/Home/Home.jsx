import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards.jsx'
import Filtros from '../Filtros/Filtros.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Paginado from '../Paginado/Paginado.jsx'
import {deletePokemon, getPokemon} from '../../redux/actions/index'

export default function Home() {

  const dispatch = useDispatch();
  const allPokemon= useSelector((state)=>state.allPokemon)
  // const pokemon= useSelector((state)=>state.allPokemon)

  const [ order, setOrden] = useState('')


  const [paginaActual, setpaginaActual] = useState(1)
  const [PokemonsPorPagina, setPokemonsPorPagina] = useState(12)
  const inidiceDelUltimoPokemon= paginaActual * PokemonsPorPagina
  const indiceDelPrimerPokemon= inidiceDelUltimoPokemon-PokemonsPorPagina
  const pokemonsActuales= allPokemon.slice(indiceDelPrimerPokemon,inidiceDelUltimoPokemon)
  
  const paginado= (numeroDePagina)=>{
    setpaginaActual(numeroDePagina)
  }

  useEffect(()=>{
      dispatch(getPokemon())
  },[dispatch]);

  function handleClick(e){
    e.preventDefault();
    setpaginaActual(1)
    dispatch(getPokemon())
}

  return (
    <div>
     

      <Link to="/create">
        <button> Crear Pokemon</button>
      </Link>
      <Link onClick={e=> handleClick(e)}>
                <button>Refresh</button>
        </Link>
      <SearchBar/>

      <Filtros
      setpaginaActual={setpaginaActual}
      setOrden={setOrden}
      />

      <Paginado
      pokemonPorPagina={PokemonsPorPagina}
      allPokemon={allPokemon.length}
      paginado={paginado}
      />

      <Cards
      pokemonsActuales={pokemonsActuales}
      />

      <Paginado
      pokemonPorPagina={PokemonsPorPagina}
      allPokemon={allPokemon.length}
      paginado={paginado}
      />

    </div>
  )
}
