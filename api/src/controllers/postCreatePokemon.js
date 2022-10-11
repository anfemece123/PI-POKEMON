// const {Pokemon, Type}= require("../db.js")

// async function postPokemon(req,res) {

//     const {name,image,hp,attack,defense,speed,weight,height,type}= req.body

//     try {
        
//         const newPokemon= await Pokemon.create({//creacion de un nuevo personaje con sus propiedades
//             name,
//             image,
//             hp,
//             attack,
//             defense,
//             speed,
//             weight,
//             height
//         })

//         newPokemon.addEpisode(type);//relaciona el personaje nuevo con los episodios en los que se encuentre

//         return newPokemon

//     } catch (error) {
//         res.status(404).send(error)
//     }
// }
// module.exports={
//     postPokemon
// }