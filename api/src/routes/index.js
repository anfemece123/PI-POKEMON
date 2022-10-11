const { Router } = require('express');
const { getAllPokemon} = require('../controllers/getAllPokemons');
const { getTypes } = require('../controllers/getTypes');
const {Pokemon, Type}= require("../db")
const router = Router();


//?================GET /pokemons?name="..."=================

router.get("/pokemon",async(req,res)=>{
    const name= req.query.name
    const totalPokemon= await getAllPokemon()
    if(name){           
        const pokemonName= totalPokemon.filter(elemento=> elemento.name.toLowerCase().includes(name.toLowerCase()))
        if(pokemonName.length){
            res.status(200).send(pokemonName)
        }else{
            res.status(404).send(`No existe pokemon con el nombre: ${name}`)
        }   
    }else{
        try {
            res.status(200).send(totalPokemon)
        } catch (error) {
            console.log(error + ",  Error en router.get('/pokemon') /routes/index.jx")
        }
    }
});

//?================GET /pokemon:{id} ====================

router.get("/pokemon/:id",async(req,res)=>{
    const id= req.params.id;
    const pokemonTotal= await getAllPokemon()
    try { 
        
        let pokemonId= pokemonTotal.filter(elemento=> elemento.id == id)

        if(pokemonId.length){
            
            res.status(200).json(pokemonId) 
        }else{
            
            res.status(404).send(`No se encontro el pokemon con id= ${id}`)       
        }

    } catch (error) {
        res.send(error)
    } 
});

//?================GET /type ====================

router.get("/type", async (_req, res) => {
    try {
      const getType = await getTypes();
      res.json(getType);
    } catch (error) {
      console.log(error + ",  Error en router.get('/episodes') /routes/index.jx");
    }
  });


//?================POST /pokemon ====================

// router.post("/pokemon", async(req,res) =>{
    
// const createPokemon = async (pokemon) => {


//         const PokeCreado = await Pokemon.create(pokemon);
//         await PokeCreado.addType(pokemon.types);//relaciona por id inicialmente con el methodo add  
//                                                  //|Pokemon.name|ID| ---> |TypePokemon|ID|id| <------|id|Type.name|
//         const poke = await Pokemon.findOne({// una vez creado el Pokemon busca ese nombre en el
//           where: {
//             name: PokeCreado.toJSON().name, 
//           },                                
//           include:{
//             model:Type,
//             attributes:["name"],
//             through:{attributes:[]}
//           },
//         });
//         return poke
//     }
//   const poke1= await createPokemon(req.body)
//   res.send(poke1)
// })


router.post('/pokemon', async (req, res) => {
  const { 
		name, 
		types, 
		hp, 
		attack, 
		defense, 
		speed, 
		height, 
		weight, 
		img,
    // createdInDb
	} = req.body;

  const pokemonCreated = await Pokemon.create({
    name, 
    hp, 
    attack, 
    defense, 
    speed, 
    height, 
    weight, 
    img,
    // createdInDb 
  })

  const pokemonTypes = await Type.findAll({
    where: { name: types }
  })

  pokemonCreated.addType(pokemonTypes)
  return res.send('Pokemon created successfuly')
})

// router.post("/pokemon", async(req,res) =>{
//         const {name,img,hp,attack,defense,speed,weight,height,types}= req.body
//         try {
            
//             const newPokemon= await Pokemon.create({//creacion de un nuevo personaje con sus propiedades
//                 name,
//                 img,
//                 hp,
//                 attack,
//                 defense,
//                 speed,
//                 weight,
//                 height
//             })
            
//             // newPokemon.addType(typeDb)
//             // let typeDb= await Type.findAll({
//             //     where:{name:types}
//             // })
//             newPokemon.addType(types.name);//relaciona el personaje nuevo con los episodios en los que se encuentre
            
//             res.send(newPokemon)
    
//         } catch (error) {
//             res.status(404).send(error)
//         }
// })

module.exports = router;
