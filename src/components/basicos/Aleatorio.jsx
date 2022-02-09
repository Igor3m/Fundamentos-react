import React from 'react'


export default props =>
    
        <div>
            <h2>Valor Aleatorio</h2>
            <p>
                <strong>Valor Minimo: </strong> {props.min}
            </p>
            <p>
                <strong>Valor Maximo: </strong> {props.max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong> {parseInt(Math.random() * (props.max - props.min) + props.min)}
            </p>
        </div>
    