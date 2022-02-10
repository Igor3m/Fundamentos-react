import './Input.css'
import React, {useState} from 'react'

export default props => {

    const [valor, setValor] = useState('Initial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
        </div>
    )
}