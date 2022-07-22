import React from "react"

export default props => {
    function acao() {        
        props.click(Math.random())        
    }
    
    return(        
        <div>        
            <button onClick={acao}>Alterar</button>
        </div>
    )
}