import React, { Component } from 'react';
import styled from 'styled-components'
import Produtos from './Components/Produtos.js'
import Carrinho from './Components/Carrinho'


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
const Conteudo = styled.div`
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
display: flex;
flex-wrap: wrap;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostraFiltro: false,
      mostraProdutos: true,
      mostraCarrinho: true,
      mostraHeader: true,
      arrayDeProdutos: [
        {
          id: 1,
          nome: "nave",
          valorProduto: 100.50,
          imgUrl: 'https://picsum.photos/200/200',
          carrinho: 22
        },
        {
          id: 2,
          nome: "nave doida",
          valorProduto: 1212.50,
          imgUrl: 'https://picsum.photos/200/201',
          carrinho: 0
        },
        {
          id: 3,
          nome: "nave 2d2d",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
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

  adicionarCarrinho = (valorIndex) => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    console.log(arrayDeProdutosCopia[valorIndex].carrinho)
    arrayDeProdutosCopia[valorIndex].carrinho = arrayDeProdutosCopia[valorIndex].carrinho + 1
    console.log(arrayDeProdutosCopia[valorIndex].carrinho)
    this.setState({
      arrayDeProdutos: arrayDeProdutosCopia,
    })
  }

  removerCarrinho = (valorIndex) => {

    console.log(`Recebi: ${valorIndex}`)
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    console.log(arrayDeProdutosCopia[valorIndex].carrinho)
    arrayDeProdutosCopia[valorIndex].carrinho = 0
    console.log(arrayDeProdutosCopia[valorIndex].carrinho)
    this.setState({
      arrayDeProdutos: arrayDeProdutosCopia,
    })
  }

  render() {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const arrayCarrinho = arrayDeProdutosCopia.filter(produto => {
      return produto.carrinho > 0
    })

    const headerContent = (
      <p>header</p>
    )
    const filtroContent = (
      <p>filtro</p>
    )
    
    const somaCarrinho = (arrayCarrinho) => {
      let soma = 0
      for (let i = 0; i < arrayCarrinho.length; i++) {
          soma += arrayCarrinho[i].valorProduto.reduce((a, b) => a + b, 0);
          return soma
      }
    }

    const produtosContent = (
      <div>
        {this.state.arrayDeProdutos.map(elemento => {
          return (
            <Produtos
              key={this.state.arrayDeProdutos.indexOf(elemento)}
              id={elemento.id}
              nome={elemento.nome}
              valorProduto={elemento.valorProduto}
              imgUrl={elemento.imgUrl}
              botaoAdicionaC={this.adicionarCarrinho}
              indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
            />
          )
        })}
      </div>
    )
    const carrinhoContent = (
      <div>
        {arrayCarrinho.map(elemento => {
          return (
            <Carrinho
              key={this.state.arrayDeProdutos.indexOf(elemento)}
              id={elemento.id}
              imgUrl={elemento.imgUrl}
              nome={elemento.nome}
              valorProduto={elemento.valorProduto}
              indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
              botaoRemoveC={this.removerCarrinho}
            />
          )
        })}
      </div>
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
