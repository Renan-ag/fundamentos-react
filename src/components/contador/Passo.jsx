import React from 'react'

export default props => {
    
    
    return(
        <div>
            <label for="passo">Passo:</label>
            <input id="passo" type="number" value={props.passo} 
            onChange={e => props.change(e.target.value)}
            style={{fontSize: '1.4rem', width:'60px'}}/>
        </div>
    );
}