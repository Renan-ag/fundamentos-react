import React from 'react'
import { Component } from 'react';
import Buttons from './Buttons';
import Display from './Display';
import Passo from './Passo';

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    changePasso = (value) => {
        let num = parseInt(value, 10)
        
        this.setState({
            passo: num
        })
    }

    changeValor = (value) =>{
        let num = parseInt(value, 10)

        this.setState({
            valor: num
        })
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render () {
        return(
            <div>                                
                <h2>Contador</h2>
                <Passo passo={this.state.passo} change={this.changePasso} />
                <Display valor={this.state.valor} />
                <Buttons onInc={this.inc} onDec={this.dec}  valor={this.state.valor} />
            </div>
        )
    }
}