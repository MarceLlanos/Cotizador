import React, { Component } from 'react';
import {primeraMayuscula} from '../Helper';
import Resultado from './Resultado';

class Resumen extends Component{
  mostrarDatos = () => {
    const {marca, plan, year} = this.props.datos;
    if(!marca || !plan || !year) return null;

    return(
      <div className = 'resume'>
        <h2>Resumen de cotizacion</h2>
        <li>Marca: {primeraMayuscula( marca )}</li>
        <li>Plan: {primeraMayuscula( plan )}</li>
        <li>Anio: {year}</li>
      </div>
    )
  }

  render(){ 
    return(
      <div>
        {this.mostrarDatos()}
        <Resultado
          resultado = {this.props.resultado}    
        />
      </div>
    )
  }
}

export default Resumen;