import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getType } from '../../redux/actions'
import { getPokemon,postPokemon } from '../../redux/actions'
import validate from './validate';
import creaTuPokemon from '../../media/creaTuPokemon.png'
import pokemonCreate from '../../media/pokemonCreate.gif'
import style from './PokemonCreate.module.css'

export default function PokemonCreate() {

    const dispatch= useDispatch()
    const types= useSelector(state=>state.type)
    const pokemons = useSelector(state => state.pokemon)
    const history= useHistory()

    const [input, setinput] = useState({
        name:'',
        img:'',
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        weight:'',
        height:'',
        types:[],
    });
    const [errors, seterrors] = useState({});

  

    useEffect(() => {
        dispatch(getType()); 
    }, [dispatch]);

    
    
    function handleChange(e){
        
        setinput({
            ...input,
            [e.target.name] : e.target.value
        })
        seterrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        // Object.keys(errors).length<1 ? setbotonError(false) : setbotonError(true)
    }
        
    
    
    function handleTypes(e){
        
        setinput({
            ...input,
            types:[...new Set([...input.types, e.target.value])]
        })
        seterrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
       
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!input.name){
            alert("Introducir nombre")

        }
        else if(pokemons.find(e=>e.name.toLowerCase()===input.name.toLowerCase())){
            alert("El pokemon ya existe")
        }
        
        else{
            dispatch(postPokemon(input));
            setinput({
                name: '',
                img:'',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                weight: '',
                height: '',
                types: [],
            })
            alert("pokemon creado")
            history.push("/home")
        }
    }
// console.log(setinput)
//     console.log(errors)
//     console.log(input)
    function handleDelete(el){
        setinput({
            ...input,
            types: input.types.filter(elemento=>elemento !== el)
        })
    }

  return (
      <div className={style.todo}>
 
        <div className={style.creaTuPokemon}>
            <img src={creaTuPokemon}/>
        </div>

    <div className={style.formulario}>
      <div>

     
     


        <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                <p className={errors.name ? style.danger : style.question}>
                    <label htmlFor="">Nombre: </label>
                    <input 
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.name ? <p className="danger"> {errors.name} </p> : null}
                 
                </div>
                <div>
                <p className={errors.hp ? style.danger : style.question}>
                    <label htmlFor="">Vida: </label>
                    <input 
                    type="text"
                    value={input.hp}
                    name="hp"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.hp ? <p className="danger"> {errors.hp} </p> : null}
                </div>
                <div>
                <p className={errors.attack ? style.danger : style.question}>
                    <label htmlFor="">Ataque: </label>
                    <input 
                    type="text"
                    value={input.attack}
                    name="attack"
                    onChange={(e)=>handleChange(e)}
                    />
             </p>
          {errors.attack ? <p className="danger"> {errors.attack} </p> : null}
                     
                </div>
                <div>
                <p className={errors.defense ? style.danger : style.question}>
                    <label htmlFor="">Defensa: </label>
                    <input 
                    type="text"
                    value={input.defense}
                    name="defense"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.defense ? <p className="danger"> {errors.defense} </p> : null}
                </div>
                <div>
                <p className={errors.speed ? style.danger : style.question}>
                    <label htmlFor="">Velocidad: </label>
                    <input 
                    type="text"
                    value={input.speed}
                    name="speed"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.speed ? <p className="danger"> {errors.speed} </p> : null}
                </div>
                <div>
                <p className={errors.weight ? style.danger : style.question}>
                    <label htmlFor="">Peso: </label>
                    <input 
                    type="text"
                    value={input.weight}
                    name="weight"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.weight ? <p className="danger"> {errors.weight} </p> : null}
                </div>
                <div>
                <p className={errors.height ? style.danger : style.question}>
                    <label htmlFor="">Altura: </label>
                    <input 
                    type="text"
                    value={input.height}
                    name="height"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.height ? <p className="danger"> {errors.height} </p> : null}
                </div>

                <div>
                <p className={errors.img ? style.danger : style.question}>
                    <label htmlFor="">Imagen: </label>
                    <input 
                    type="text"
                    value={input.img}
                    name="img"
                    onChange={(e)=>handleChange(e)}
                    />
                      </p>
          {errors.img ? <p className="danger"> {errors.img} </p> : null}
                </div>
              <div>

                <p className={errors.types ? style.danger : style.question}>
                <label htmlFor="">Tipos: </label>
                <select type="types" value={input.types} name="types" onChange={(e)=>handleTypes(e)}>
                    {
                        types.map(el=>(
                            <option value={el.name}>
                                {el.name}
                            </option>
                        ))
                    }
                </select>
           
               
                {/* <ul><li>{input.types.map(el=> el+ " ,")}</li></ul> */}

                </p>
          {errors.types ? <p className="danger"> {errors.types} </p> : null}
               
            </div>
                  
                  {
                      input.length<1 ? 
                      <button type="submit" disabled>Crear pokemon</button>
                      
                      :<button className={style.botonSubmit} type="submit" disabled={ Object.keys(errors).length<1 ? false : true}>Crear pokemon</button>
                  }
          
                

           
            </form>

        {
            input.types.map(el=>
                <div> 
            <button>{el}<button className='boton' onClick={()=>handleDelete(el)} >X</button></button>
            
        </div>
        )
        }
         </div>  

        <div className={style.imagen}>
        <img src={pokemonCreate}/>
        </div>
        </div>

        <Link to='/home'>
        <button className={style.botonVolver}> Volver a home </button>
    </Link>


    </div>
    
  )

 
}
