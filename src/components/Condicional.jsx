import React from 'react'
import _if from './if'

export default props => {
    
    return (
        <div>
            <h2>O número é {props.numero}</h2>
            
            <_if test={false}>
                Olá
            </_if>

            {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span>}
        </div>
    )

}