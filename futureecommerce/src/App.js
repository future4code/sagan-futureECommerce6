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
grid-template-columns: 8fr 2fr ;
width: 100%;
height: 100%;
`
const LateralEsquerda = styled.section`
display:grid;
grid-template-rows: 1fr 9fr;
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
          mostraFiltro: false,
          mostraProdutos: true,
          mostraCarrinho: false,
          mostraHeader: true,
          arrayDeProdutos:[
            {id: 1,
            nome: "nave",
            valorProduto: 100.50,
            imgUrl:'https://picsum.photos/200/200',
            },
            {id: 2,
              nome: "nave doida",
              valorProduto: 1212.50,
              imgUrl:'https://picsum.photos/200/201',
              }
          ]
    }
  }

  botaoMostraFiltro = () => {
    this.setState({
      mostraFiltro: !this.state.mostraFiltro
    })
  }

  botaoMostraCarrinho = () => {
    this.setState({
      mostraCarrinho: !this.state.mostraCarrinho
    })
  }

  render(){
    const headerContent = (
      <p>header</p>
    ) 
    const filtroContent = (
      <p>filtro</p>
    ) 
    const produtosContent = (
      <p>produtos</p>
    ) 
    const carrinhoContent = (
      <p>carrinho</p>
    ) 

    return (

      <DivPai>
         <Header>{this.state.mostraHeader ? headerContent : ''}</Header>
          <Conteudo>
           <LateralEsquerda>
             <Filtro>
               <button onClick={this.botaoMostraFiltro}>Mostra Filtro</button>
               {this.state.mostraFiltro ? filtroContent : ''}
               </Filtro>
             <ProdutosDisplay>{this.state.mostraProdutos ? produtosContent : ''}</ProdutosDisplay>
            </LateralEsquerda>
            <LateralDireita>
             <button onClick={this.botaoMostraCarrinho}> Mostra Carrinho</button>
             {this.state.mostraCarrinho ? carrinhoContent : ''}
            </LateralDireita>
          </Conteudo>
      </DivPai>
    )
  }
}
   
export default App;
