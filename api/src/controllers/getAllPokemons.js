const axios = require("axios")
const {Pokemon, Type}= require("../db")

async function getAllPokemon (){
  
    try {
        
        const api= (await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")).data;
        const pokemonResult= await api.results.map(async elemento=>{
            const datosPokemon= (await axios.get(elemento.url)).data;
                const obj={
                    id: datosPokemon.id,
                    name: datosPokemon.name,
                    img: datosPokemon.sprites.other['official-artwork'].front_default,
                    // sprites.other['official-artwork'].front_default,
                    // sprites.other.dream_world.front_default
                    // sprites.other.home.front_default
                    hp: datosPokemon.stats[0].base_stat,
                    attack: datosPokemon.stats[1].base_stat,
                    defense: datosPokemon.stats[2].base_stat,
                    speed: datosPokemon.stats[5].base_stat,
                    weight: datosPokemon.weight,
                    types: datosPokemon.types.map(i=>i.type),
                    height: datosPokemon.height,
                }
                return obj
})
// 
        const db= await Pokemon.findAll({//traemos los datos de la base de datos
            include:{
                model: Type,//incluir el modelo type 
                attributes:["name"],//el atributo name que es de type
                through:{attributes:[]}//de la forma que debe retornar el atributo que seria un arr []
    }});
    
        const apiAndBd= [...pokemonResult,...db]// convinamos los datos de la api y la base de datos 
        
    return Promise.all(apiAndBd)


    } catch (error) {
        console.log(error + 'Error en funcion getAllpokemon  /controlers')
    }
}


module.exports={
    getAllPokemon
}