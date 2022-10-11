import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDetalle } from '../../redux/actions'

export default function Detalle(props) {

    const dispatch= useDispatch()
    const stateDetail= useSelector(state=>state.detail)

    useEffect(() => {
    dispatch(getDetalle(props.match.params.id))
    }, [dispatch])
    
    

  return (
    <div>
        {
            stateDetail.length>0 ?
            <div>
                <h1>{stateDetail[0].name}</h1>
                <img src={stateDetail[0].img}/>
                <h2> {stateDetail[0].hp}</h2>
                <h2> {stateDetail[0].attack}</h2>
                <h2> {stateDetail[0].defense}</h2>
                <h2> {stateDetail[0].weight}</h2>
                <h2> {stateDetail[0].height}</h2>
                <h4> Tipos:
                    {
                        stateDetail[0].types.map(el=>el.name)
                    }
                </h4>
              
            </div>: <p>loading...</p>
        }
        <Link to={"/home"}>
            <button>Volver</button>
        </Link>
    </div>
  )
}
