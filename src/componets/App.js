import React, {Component} from 'react';
import Header from './Header';
import Form from './Form';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';

class  App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    //Agregar una base de 2000

    let resultado = 2000;

    // Obtener la diferencia de anios 
    const diferenciaAnio = obtenerDiferenciaAnio(year);
    console.log(`La diferencia es: ${diferenciaAnio}`);

    // y por cada anio restar el 3 % al valor del seguro
    resultado -= ((diferenciaAnio * 3) * resultado) / 100;
    console.log(resultado);
    
    // Americano = 15% Asiatico =5%, Europeo = 30% de incremento al valor actual
    
    resultado = calcularMarca(marca) * resultado;
    console.log("Calcular" +resultado);

    //  El plan del auto, el basico incrementa el valor 20% y cobertura completa 50%

    let incrementoPlan = obtenerPlan(plan);

    // Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // Crear objeto para el resumen

    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }

    //Ya tenemos un resultado
    this.setState({
      resultado: resultado,
      datos : datosAuto
    })
  }
  render(){
    return (
      <div className="App">
        <Header title = 'Cotizador de seguro de auto'/>
        <div className="container-form">
          <Form 
            cotizarSeguro = {this.cotizarSeguro}
          />
          <Resumen 
            datos = {this.state.datos}
            resultado = {this.state.resultado}
          />
        </div>
      </div>
    )
  }
}

export default App;
