import React, { Component } from 'react';
import styled from 'styled-components'
import Produtos from './Components/Produtos.js'
import Carrinho from './Components/Carrinho'


const DivPai = styled.div`
background-color: #EAF2EF;
width: 100%;
height: 100vh;
`
const Header = styled.div`
background-color: #001021;
display: flex;
justify-content: space-between;
color: #EAF2EF;
`
const Conteudo = styled.div`
display: inline-flex;
`
const LateralEsquerda = styled.div`
`
const LateralDireita = styled.div`
max-width: 50%;
`
const FiltroPai = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
margin-top: 5px;
`
const FiltroOpcao = styled.div`
display: flex;
flex-direction: row;
margin-left: 10px;
align-items: center;

img {margin-left: 10px};

`
const ProdutosDisplay = styled.div`
display: flex;
`
const Card = styled.div`
margin: 10px;
display: inline-flex;
width: 20%;
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
          nome: "Capsula do foguete da SpaceX",
          valorProduto: 5234.79,
          imgUrl: require("./img/img1.jpg"),
          carrinho: 0
          },
          {
          id: 2,
          nome: "Carro explorador de planetas",
          valorProduto: 3459.30,
          imgUrl: require("./img/img2.jpg"),
          carrinho: 0
          },
          {
          id: 3,
          nome: "Foguete de Guerra ",
          valorProduto: 7345.12,
          imgUrl: require("./img/img3.jpg"),
          carrinho: 0
          },
          {
          id: 4,
          nome: "Onibus espacial dos EUA - Promoção",
          valorProduto: 2999.99,
          imgUrl: require("./img/img4.jpg"),
          carrinho: 0
          },
          {
          id: 5,
          nome: "Onibus Espacial Super Luxo",
          valorProduto: 9520.97,
          imgUrl: require("./img/img5.jpg"),
          carrinho: 0
          },
          {
          id: 6,
          nome: "Onibus Espacial de Guerra InterGalática",
          valorProduto: 4397.47,
          imgUrl: require("./img/img6.png"),
          carrinho: 0
          },
          {
          id: 7,
          nome: "Onibus Espacial Standart - Para toda Família",
          valorProduto: 1499.99,
          imgUrl: require("./img/img7.jpg"),
          carrinho: 0
          },
          {
          id: 8,
          nome: "Foguete super Fino para Exploração",
          valorProduto: 7889.54,
          imgUrl: require("./img/img8.jpg"),
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
      mostraFiltro: false,
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
  
  organizaDisplay = (event) => {
    if (event.target.value === "ASC") {
      const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item1.valorProduto - item2.valorProduto)
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
    } else if (event.target.value === "DESC") {
      const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
      const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item2.valorProduto - item1.valorProduto)
      this.setState({
        arrayDeProdutos: valoresOrdenados,
      })
    }
  }

  render() {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const arrayCarrinho = arrayDeProdutosCopia.filter(produto => {
      return produto.carrinho > 0
    })
    const somaCarrinho = arrayCarrinho.map(item => item.valorProduto * item.carrinho).reduce((soma, subtotal) => subtotal + soma,0)

    const headerContent = (
      <div>
        <h1>Future4 Ecommerce</h1>
        <h4>Grupo 6</h4>
      </div>
    )
    const filtroContent = (
      <div>
        <div>
          <p>por preco</p>
          <input type="number" value={this.state.inputMenor} onChange={this.inputMenor} placeholder="Menor"></input>
          <input type="number" value={this.state.inputMaior} onChange={this.inputMaior} placeholder="Maior"></input>
          <button onClick={this.pesquisaPorValor}>Ordena</button>
        </div>
        <div>
          <p>por nome</p>
          <input type="text" value={this.state.inputPesquisa} onChange={this.inputPesquisa} placeholder="Pesquisa"></input>
        </div>
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
                valorProduto={elemento.valorProduto.toFixed(2).toString().replace(".",",")}
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
                valorProduto={elemento.valorProduto.toFixed(2).toString().replace(".",",")}
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
        {arrayCarrinho.map(elemento => {
          return (
            <Carrinho
              key={this.state.arrayDeProdutos.indexOf(elemento)}
              id={elemento.id}
              imgUrl={elemento.imgUrl}
              nome={elemento.nome}
              valorProduto={elemento.valorProduto.toFixed(2).toString().replace(".",",")}
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

    const headerCartContent =(
      <div onClick={this.botaoMostraCarrinho}>
        <img src={require("./img/cart.png")}/>
        <p>Valor do carrinho:</p>
        <p>R$ {somaCarrinho.toFixed(2).toString().replace(".",",")}</p>
      </div>
    )


    return (

      <DivPai>
        <Header>
          <div>{this.state.mostraHeader ? headerContent : ''}</div>
          <div>{this.state.mostraHeader ? headerCartContent : ''}</div>
        </Header>
        <Conteudo>
          <LateralEsquerda>
            <FiltroPai>
              <FiltroOpcao>
              <div>
                <select onChange={this.organizaDisplay}>
                <option value="ASC">Preço: Crescente</option>
                <option value="DESC">Preço: Decrescente</option>
                </select>
              </div>
              <FiltroOpcao>
                <img src={require("./img/filterIcon.png")} onClick={this.botaoMostraFiltro}/>
                <p onClick={this.botaoMostraFiltro}>Filtrar produtos</p>
                {this.state.limpaPesquisa ? <img src={require("./img/limpapesquisaIcon.svg")} onClick={this.limpaPesquisaInput}/> : ""}
              </FiltroOpcao>
              </FiltroOpcao>
              <div>
              {this.state.mostraFiltro ? filtroContent : ''}
              </div>
            </FiltroPai>
            <ProdutosDisplay>{this.state.mostraProdutos ? produtosContent : produtosPesquisaContent}</ProdutosDisplay>
          </LateralEsquerda>
          <LateralDireita>
            {this.state.mostraCarrinho ? carrinhoContent : ''}
          </LateralDireita>
        </Conteudo>
      </DivPai>
    )
  }
}

export default App;
