import React, { Component } from 'react';
import styled from 'styled-components'
import Produtos from './Components/Produtos.js'
import Carrinho from './Components/Carrinho'


const DivPai = styled.div`
`
const Header = styled.div`
`
const Conteudo = styled.div`
display: inline-flex;
`
const LateralEsquerda = styled.div`
`
const LateralDireita = styled.div`
max-width: 50%;
`
const Filtro = styled.div`
`
const ProdutosDisplay = styled.div`
display: flex;
`
const Card = styled.div`
border: 1pt solid lightgray;
margin: 10px;
display: inline-flex;
border-radius: 5px;
box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07);
`


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostraFiltro: false,
      mostraProdutos: true,
      mostraCarrinho: true,
      mostraHeader: true,
      inputMenor: "",
      inputMaior: "",
      inputPesquisa: "",
      produtoPesquisa: [],
      limpaPesquisa: false,
      arrayDeProdutos: [
        {
          id: 1,
          nome: "nave",
          valorProduto: 100.50,
          imgUrl: 'https://picsum.photos/200/200',
          carrinho: 0
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
    arrayDeProdutosCopia[valorIndex].carrinho = arrayDeProdutosCopia[valorIndex].carrinho + 1    
    this.setState({
      arrayDeProdutos: arrayDeProdutosCopia,
    })
  }

  diminuiCarrinho = (valorIndex) => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]    
    arrayDeProdutosCopia[valorIndex].carrinho = arrayDeProdutosCopia[valorIndex].carrinho - 1    
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

  pesquisaPorValor = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valorMenor = (this.state.inputMenor.length > 0 ? this.state.inputMenor : 0)
    const valorMaior = (this.state.inputMaior.length > 0 ? this.state.inputMaior : 99999999999)
    const produtoPesquisa = arrayDeProdutosCopia.filter(produto =>{
      return (produto.valorProduto >= valorMenor && produto.valorProduto <= valorMaior)
    })
    this.setState({
      produtoPesquisa: produtoPesquisa,
      mostraProdutos: false,
      limpaPesquisa: true,
    })
  }

  inputMenor = (event) => {
    this.setState({
      inputMenor: event.target.value
    })
  }

  inputMaior = (event) => {
    this.setState({
      inputMaior: event.target.value
    })
  }

  limpaPesquisaInput = () => {
    this.setState({
      inputMenor: "",
      inputMaior: "",
      produtoPesquisa: [],
      mostraProdutos: true,
      limpaPesquisa: false,
      inputPesquisa: "",
    })
  }

  inputPesquisa = (event) => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const produtoPesquisa = arrayDeProdutosCopia.filter(produto => 
      produto.nome.includes(this.state.inputPesquisa))
      this.setState({
        inputPesquisa: event.target.value,
        produtoPesquisa: produtoPesquisa,
        mostraProdutos: false,
        limpaPesquisa: true,
      })
  }

  organizaValorASC = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item1.valorProduto - item2.valorProduto)
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }

  organizaValorDESC = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item2.valorProduto - item1.valorProduto)
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }

  render() {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const arrayCarrinho = arrayDeProdutosCopia.filter(produto => {
      return produto.carrinho > 0
    })
    const somaCarrinho = arrayCarrinho.map(item => item.valorProduto * item.carrinho).reduce((soma, subtotal) => subtotal + soma,0)

    const headerContent = (
      <p>header</p>
    )
    const filtroContent = (
      <div>        
        {this.state.limpaPesquisa ? <p onClick={this.limpaPesquisaInput}>Limpa</p> : ""}
        <button onClick={this.pesquisaPorValor}>Ordena</button>
        <input type="number" value={this.state.inputMenor} onChange={this.inputMenor} placeholder="Menor"></input>
        <input type="number" value={this.state.inputMaior} onChange={this.inputMaior} placeholder="Maior"></input>
        <input type="text" value={this.state.inputPesquisa} onChange={this.inputPesquisa} placeholder="Pesquisa"></input>
      </div>
    )

    const produtosContent = (
      <div>
        {this.state.arrayDeProdutos.map(elemento => {
          return (
            <Card>
              <Produtos
                key={this.state.arrayDeProdutos.indexOf(elemento)}
                id={elemento.id}
                nome={elemento.nome}
                valorProduto={elemento.valorProduto}
                imgUrl={elemento.imgUrl}
                botaoAdicionaC={this.adicionarCarrinho}
                indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
              />
            </Card>
          )
        })}
      </div>
    )

    const produtosPesquisaContent = (
      <div>
        {this.state.produtoPesquisa.map(elemento => {
          return (
            <Card>
              <Produtos
                key={this.state.produtoPesquisa.indexOf(elemento)}
                id={elemento.id}
                nome={elemento.nome}
                valorProduto={elemento.valorProduto}
                imgUrl={elemento.imgUrl}
                botaoAdicionaC={this.adicionarCarrinho}
                indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
              />
            </Card>
          )
        })}
      </div>
    )

    const carrinhoContent = (
      <div>
        <p>{somaCarrinho}</p>
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
              quantidadeItem={elemento.carrinho}
              botaoAdiciona={this.adicionarCarrinho}
              botaoDiminui={this.diminuiCarrinho}
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
              <button onClick={this.organizaValorASC}>Ordena crescente</button>
              <button onClick={this.organizaValorDESC}>Ordena decresente</button>
              <button onClick={this.botaoMostraFiltro}>Mostra Filtro</button>
              {this.state.mostraFiltro ? filtroContent : ''}
            </Filtro>
            <ProdutosDisplay>{this.state.mostraProdutos ? produtosContent : produtosPesquisaContent}</ProdutosDisplay>
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
