import React from 'react'
import produtos from '../../data/produto'
import './TabelaProdutos.css'

export default props => {

    function getLinhas(){
        return produtos.map((produto,i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className='TabelaProdutos'>
            <table border='1'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>

            </table>
        </div>
    )
}