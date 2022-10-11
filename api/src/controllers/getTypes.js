const axios= require("axios")
const {Type}= require("../db.js")

async function getTypes() {
    {
        try {
            const apiTypes = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
    
            apiTypes.forEach(elemento => {
                  Type.findOrCreate({
                    where:{name: elemento.name},            
                })
            });
        const alltypes= await Type.findAll()

         return alltypes
             
        } catch (error) {
            console.log(error + 'Error en funcion getTypes  /controlers')
        }    
    }
}
module.exports={
    getTypes
}