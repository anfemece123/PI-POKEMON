import pokemonNotFound from "../../media/pokemonNotFound.webp"

const initialState={
    pokemon:[],
    type:[],
    allPokemon:[],
    detail:[],
    
}


export default function rootReducer(state=initialState,action){
    switch (action.type) {

        case 'GET_POKEMON':
            return{
                ...state,
                pokemon:action.payload,
                allPokemon:action.payload,
            }
        
        case 'GET_NAME_POKEMON':
            
            return{
                ...state,
                pokemon:action.payload
            }

        case 'GET_TYPE':
            return{
                ...state,
                type:action.payload
            }
        case "POST_POKEMON":
            return{
                ...state
            }
        case "GET_DETAIL":
            return{
                ...state,
                detail:action.payload
            }

            //?====== filtros===== 

        case "FILTER_BY_TYPES":
            const allPokemons = state.allPokemon
            // const mapTypes= allPokemons.map(el=>el.types.name)
            const statusFiltered = action.payload === "All" ? allPokemons : allPokemons.filter(el => el.types.map(i=>i.name).includes(action.payload));
            
            return {
                ...state,
                pokemon: statusFiltered.length ? statusFiltered : allPokemons
            }

        case "FILTER_CREATED":
            const allPokemons2 = state.allPokemon
            const statusFiltered2 = action.payload === "Created" ? allPokemons2.filter(el => el.createdInDb) : allPokemons2.filter(el => !el.createdInDb) 

            return {
                ...state,
                pokemon: action.payload === 'All' ? allPokemons2 : statusFiltered2
            }

        case "ORDER_BY_NAME_OR_STRENGH":
            
            let sortedArray

            if(action.payload === 'asc'){
                sortedArray = state.pokemon.sort(function (a, b){
                        if(a.name > b.name){
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'desc'){
                sortedArray = state.pokemon.sort(function (a, b){
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'HAttack'){
                sortedArray = state.pokemon.sort(function (a, b){
                        if(a.attack > b.attack){
                            return -1;
                        }
                        if(b.attack > a.attack){
                            return 1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'LAttack'){
                sortedArray = state.pokemon.sort(function (a, b){
                        if(a.attack > b.attack){
                            return 1;
                        }
                        if(b.attack > a.attack){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'normal'){
                const apiPokes = state.pokemon.filter( el => !el.createdInDb).sort(function (a, b){
                    if(a.id > b.id){
                        return 1;
                    }
                    if(b.id > a.id){
                        return -1;
                    }
                    return 0;
                }) 
                const dbPokes = state.pokemon.filter( el => el.createdInDb).sort(function (a, b){
                    if(a.id > b.id){
                        return 1;
                    }
                    if(b.id > a.id){
                        return -1;
                    }
                    return 0;
                }) 
                sortedArray = [...apiPokes, ...dbPokes]
            }

            return {
                ...state,
                pokemon: sortedArray
            } 

        default:
            return state
    }
}