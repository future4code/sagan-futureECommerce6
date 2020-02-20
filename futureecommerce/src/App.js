import React, {Component} from 'react';
import styled from 'styled-components'


const DivPai = styled.div`

display: grid;
grid-template-rows: 1fr 9fr;
width: 100%;
height: 100%;

`
const Header = styled.div`
width: 100%;
height: 100%;
`
const Conteudo =styled.div`
display: grid;
grid-template-columns: 8fr 2fr;
width: 100%;
height: 100%;

`
const LateralEsquerda = styled.section`
display:grid;
grid-template-rows: 9fr 1fr;
grid-template-columns: 1fr;
width: 100%;
height: 100%;
`
const LateralDireita = styled.section`
width: 100%;
height: 100%;
`
const Filtro = styled.div`
width: 100%;
height: 100%;
`
const ProdutosDisplay = styled.div`
width: 100%;
height: 100%;
`

class App extends Component  {
  constructor(props){
    super(props)
    this.state={
        mensagem: ''
    }


  }
  render(){
    return (

      <DivPai>
         <Header>Header</Header>
         <Conteudo>Conteudo
           <LateralEsquerda>lateral esquerda
             <Filtro>Filtro</Filtro>
             <ProdutosDisplay>Produtos display</ProdutosDisplay>
           </LateralEsquerda>
           <LateralDireita>lateral direita</LateralDireita>
         </Conteudo>
      </DivPai>
    )
  }
}
   
export default App;
