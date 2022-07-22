import './Card.css'
import React from 'react'

export default (props) => 
    <div className="card" style={{borderColor : props.color || '#000'}}>
        <header className="header">
            <h3>
                {props.titulo}
            </h3>
        </header>
        <main className="conteudo">
            {props.children}
        </main>
        <footer className="rodape" style={{backgroundColor : props.color || '#000'}}>
            <h4>
                {props.rodape}
            </h4>
        </footer>
    </div>