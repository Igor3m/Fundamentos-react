import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/Repeticao/listaAlunos'
import TabelaProdutos from './components/Repeticao/TebelaProdutos'
import ParOuImpar from './components/Condicional/ParOuImpar'
import UsuarioInfo from './components/Condicional/usuarioInfo'
import DiretaPai from './components/comunicação/DiretaPai'
import IndiretaPai from './components/comunicação/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Cont'

export default () => 
    
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Exercicios'>
            <Card titulo = '#12 - Contador' color='#fffff'>
               <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo = '#11 - Componente Controlado (Input)' color='#E45F56'>
               <Input></Input>
            </Card>
            <Card titulo = '#10 - Comunicação Indireta' color='#8BAD39'>
               <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo = '#9 - Comunicação Direta' color='#59323C'>
               <DiretaPai></DiretaPai>
            </Card>
            <Card titulo = '#8 - Par ou Impar' color='#982395'>
               <ParOuImpar numero={20}></ParOuImpar>
               <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
            </Card>
            <Card titulo = '#7 - Tabela de Produtos' color='#3A9AD9'>
               <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo = '#6 - Repetiçao' color='#FF4C65'>
               <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo = '#5 - Componentes com Filhos' color='#00C8f8'>
            <Familia sobrenome='Ferreira'>
            <FamiliaMembro nome='Pedro'></FamiliaMembro>
            <FamiliaMembro nome='Ana'></FamiliaMembro>
            <FamiliaMembro nome='Luiza'></FamiliaMembro>
            </Familia>
            </Card>
            <Card titulo = '#4 - Desafio Aleatório' color='#080'>
            <Aleatorio min={1} max={60}
            ></Aleatorio>    
            </Card>
            <Card titulo='#3 - Fragmento' color='#E94C6F'>
            <Fragmento></Fragmento>
            </Card>
            <Card titulo='#2 - Com Parâmetro' color='#E8871A'>
            <ComParametro
                titulo='Segundo Componente'
                subtitulo='Muito Legal!'
            ></ComParametro>
            </Card>
            <Card titulo='#1 - Primeiro Componente' color='#588C73'>
            <Primeiro></Primeiro>
            </Card>
            </div>
            
    </div>
    
