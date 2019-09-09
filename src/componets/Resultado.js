import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component{
  render(){
    const resultado = this.props.resultado;
    const mensaje = (!resultado) ? 'Elige marca, anio y tipo de seguro' : 'El total es : $'
    return(
      <div className = 'big-total'>
        {mensaje}
        <TransitionGroup component='span' className = 'answer'>
          <CSSTransition
            classNames = 'answer'
            key = {resultado}
            timeout = { {enter:500, exit: 500} }
          >
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default Resultado;