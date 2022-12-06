const { Router } = require('express');
const { getAllPokemon} = require('../controllers/getAllPokemons');
const { getTypes } = require('../controllers/getTypes');
const {Pokemon, Type}= require("../db")
const router = Router();


//?================GET /pokemons?name="..."=================

router.get("/pokemon",async(req,res)=>{

    const name= req.query.name
    const totalPokemon= await getAllPokemon()
    
    try {
    if(name){           
        const pokemonName= totalPokemon.filter(elemento=> elemento.name.toLowerCase().includes(name.toLowerCase()))
        if(pokemonName.length){
            res.status(200).send(pokemonName)
        }else{
            res.status(404).send(`No existe pokemon con el nombre: ${name}`)
        }   
    }else{
       res.status(200).send(totalPokemon)

      }
    }
         catch (error) {
            console.log(error + ",  Error en router.get('/pokemon') /routes/index.jx")
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


router.post('/pokemon', async (req, res) => {
  try {
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
    
  } catch (error) {
    console.log(error)
  }
})


module.exports = router;
