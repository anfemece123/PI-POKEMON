import axios from 'axios'; 



export const getPokemon=()=>{
    return async (dispatch)=>{
        let json = await axios.get('http://localhost:3001/pokemon')
        return dispatch({
            type:"GET_POKEMON",
            payload: json.data
        })
    }
}

export const getNamePokemon=(payload)=>{
    return async function(dispatch){
        let json= await axios.get(`http://localhost:3001/pokemon?name=${payload}`)
        return dispatch({
            type:'GET_NAME_POKEMON',
            payload:json.data
        })
    }
}

export const getType=()=>{
    return async (dispatch)=>{
        let json = await axios.get('http://localhost:3001/type')
        return dispatch({
            type:"GET_TYPE",
            payload: json.data
        })
    }
}


export const postPokemon=(payload)=>{
    return async function(dispatch){
        const pokemon = await axios.post("http://localhost:3001/pokemon", payload)
        return {
            type:"POST_POKEMON",
            payload: pokemon
        }
    }
}

export const getDetalle=(id)=>{
    return async function(dispatch){
        const pokemonid= await axios.get(`http://localhost:3001/pokemon/${id}`)
        return dispatch({
            type:"GET_DETAIL",
            payload: pokemonid.data
        })
    }
}



//?===filtros=====

export const  filterPokemonsByType=(payload)=>{
    return {
        type:"FILTER_BY_TYPES",
        payload
    }
}

export const filterCreated=(payload)=>{
    return{
        type: "FILTER_CREATED",
        payload
    }
}

export const orderByName=(payload)=>{
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export const orderByNameOrStrengh=(payload)=>{
    
    return {
        type:"ORDER_BY_NAME_OR_STRENGH",
        payload
    }
}