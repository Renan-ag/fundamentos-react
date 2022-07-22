import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Pai from './components/comunicaocao/direta/Pai'
import Super from './components/comunicaocao/indireta/Super'
import Input from './components/form/Input.jsx'
import Contador from './components/contador/Contador'

export default (props) => 
    <div>
        <div>
            <h1>Fundamentos React</h1>
        </div>
        <div className="app">
            <Card titulo="Primeiro Componente" rodape="#01 - Componente Simples" color="#FA6900">
                <Primeiro />
            </Card>
            <Card titulo="Segundo Componente" rodape="#02 - Componente com parametro" color="#E94C6F">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="Terceiro Componente" rodape="#03 - Componente com filhos" color="#008BBA">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Pedro</li>
                        <li>Paula</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="Quarto Componente" rodape="#04 - Componente com repetição" color="#D96459">
                <Repeticao />
            </Card>

            <Card titulo="Quinto Componente" rodape="#05 - Componente com condição" color="#92B06A">
                <Condicional numero={10}/>
            </Card>

            <Card titulo="Sexto Componente" rodape="#06 - Comunicação direta" color="#FA6900">
                <Pai sobrenome="Freitas" />
            </Card>

            <Card titulo="Setimo Componente" rodape="#07 - Comunicação indireta" color="#FA6260">
                <Super />
            </Card>

            <Card titulo="Oitavo Componente" rodape="#08 - Input" color="#9C0F5F">
                <Input />
            </Card>

            <Card titulo="Nono Componente" rodape="#09 - Contador" color="#293E69">
                <Contador />
            </Card>
        </div>
    </div>
