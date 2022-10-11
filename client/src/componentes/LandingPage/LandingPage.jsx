import React from 'react'
import {Link} from 'react-router-dom'
import charizard from '../../media/charizard.gif'
import style from './LandingPage.module.css'
import atrapalosYa from '../../media/atrapalosYa.png'

function LandingPage() {
  return (
      <div className={style.LandingPage}>
        <div style={{display:'flex', flexFlow:'column'}}>
        <img src={atrapalosYa} alt=""  width="500px"/>

      <Link to="/home">
        <button className={style.boton}>GO !!!</button>
     </Link>
        </div>
        <div>
        <img src={charizard} alt="imagen not found" width="650px"/>
        </div>
        {/* <img src={pokemon2} alt="" /> */}
      </div>
  )
}

export default LandingPage