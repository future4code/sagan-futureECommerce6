import React, { Component } from 'react';
import styled from 'styled-components'
import Produtos from './Components/Produtos.js'
import Carrinho from './Components/Carrinho'


const DivPai = styled.div`
/* display: grid;
grid-template-rows: 1fr 9fr;
max-width: 1280px;
max-height: 720px;
border: 1pt solid gray; */
`
const Header = styled.div`
/* border: 1pt solid gray; */
`
const Conteudo = styled.div`
display: inline-flex;
/* grid-template-columns: 8fr 2fr ; */
/* border: 1pt solid gray; */
`
const LateralEsquerda = styled.div`
/* display:grid;
/* grid-template-rows: 1fr 15fr; */
/* border: 1pt solid red; */ 
`
const LateralDireita = styled.div`
max-width: 50%;
`
const Filtro = styled.div`
/* border: 1pt solid gray; */
`
const ProdutosDisplay = styled.div`
display: flex;
/* flex-direction: row;
border: 1pt solid gray; */
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
  0 100px 80px rgba(0, 0, 0, 0.07)
;

`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostraFiltro: false,
      mostraProdutos: true,
      mostraCarrinho: true,
      mostraHeader: true,
      limpapesquisa: false,
      inputPesquisa: "",
      inputMaior: "",
      inputMenor: "",
      produtosPesquisa: [],
      arrayDeProdutos: [
        {
          id: 1,
          nome: "aaabb",
          valorProduto: 100.50,
          imgUrl: 'https://picsum.photos/200/200',
          carrinho: 0
        },
        {
          id: 2,
          nome: "bbbccc",
          valorProduto: 50.50,
          imgUrl: 'https://picsum.photos/200/201',
          carrinho: 0
        },
        {
          id: 3,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        },
        {
          id: 4,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        },
        {
          id: 5,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        },
        {
          id: 6,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        },
        {
          id: 7,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        },
        {
          id: 8,
          nome: "aacc",
          valorProduto: 3000,
          imgUrl: 'https://picsum.photos/200/202',
          carrinho: 0
        }
      ]
    }
  }

  // componentDidMount() {
  //   const dadosArmazenadosString = localStorage.getItem("stateDeProdutos");
  //   const novoEstado = JSON.parse(dadosArmazenadosString);
  //   this.setState(novoEstado);
  //   }
  // componentDidUpdate() {
  //   const limpaStorage = "";
  //   localStorage.setItem("stateDeProdutos", limpaStorage);
  //   const estadoComoString = JSON.stringify(this.state);
  //   localStorage.setItem("stateDeProdutos", estadoComoString);
  //   } 

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

  removerCarrinho = (valorIndex) => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    arrayDeProdutosCopia[valorIndex].carrinho = 0
    this.setState({
      arrayDeProdutos: arrayDeProdutosCopia,
    })
  }

  organizaValorAsc = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item1.valorProduto - item2.valorProduto)
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }
  organizaValorDesc = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => item2.valorProduto - item1.valorProduto)
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }
  organizaNomeAsc = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => {return (item1.nome < item2.nome) ? -1:1})
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }
  organizaNomeDesc = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valoresOrdenados = arrayDeProdutosCopia.sort((item1, item2) => {return (item1.nome > item2.nome) ? -1:1})
    this.setState({
      arrayDeProdutos: valoresOrdenados,
    })
  }
  inputPesquisa = event => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const produtosPesquisa = arrayDeProdutosCopia.filter( p => p.nome.includes(this.state.inputPesquisa))
    this.setState({ 
      inputPesquisa: event.target.value,
      produtosPesquisa: produtosPesquisa,
      mostraProdutos: false,
      limpapesquisa: true
    });
  };
  limpaPesquisaInput = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    this.setState({ 
      inputPesquisa: "",
      inputMaior: "",
      inputMenor: "",
      produtosPesquisa: [],
      mostraProdutos: true,
      limpapesquisa: false
    });
  };

  inputMaior = event => {
    this.setState({inputMaior: event.target.value });
  };
  inputMenor = event => {
    this.setState({inputMenor: event.target.value });
  };

  pesquisaPorValor = () => {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const valorMenor = (this.state.inputMenor.length > 0 ? this.state.inputMenor : 0)
    const valorMaior = (this.state.inputMaior.length > 0 ? this.state.inputMaior : 9999999)
    const produtosPesquisa = arrayDeProdutosCopia.filter(produto => {
      return (produto.valorProduto >= valorMenor && produto.valorProduto <= valorMaior)
    })
    this.setState({ 
      produtosPesquisa: produtosPesquisa,
      mostraProdutos: false,
      limpapesquisa: true
    });
  };
  render() {
    const arrayDeProdutosCopia = [...this.state.arrayDeProdutos]
    const arrayCarrinho = arrayDeProdutosCopia.filter(produto => {
      return produto.carrinho > 0
    })
    const somaCarrinho = arrayCarrinho.map(item => item.valorProduto * item.carrinho).reduce((soma, subtotal) => subtotal + soma, 0)
    const headerContent = (
      <p>header</p>
    )
    const filtroContent = (
      <div>
      <p>filtro</p>
      <button onClick={this.organizaValorAsc}>Valor crescente</button>
      <button onClick={this.organizaValorDesc}>Valor Decrescente</button>
      <button onClick={this.organizaNomeAsc}>Titulo crescente</button>
      <button onClick={this.organizaNomeDesc}>Titulo Decrescente</button>
      <input type="text" value={this.state.inputPesquisa} onChange={this.inputPesquisa} placeholder="pesquisa"></input>
      {this.state.limpapesquisa ? <p onClick={this.limpaPesquisaInput}>limpa pesquisa</p> : ""}
      <input type="number" value={this.state.inputMenor} onChange={this.inputMenor} placeholder="Maior"></input>
      <input type="number" value={this.state.inputMaior} onChange={this.inputMaior} placeholder="Menor"></input>
      <button onClick={this.pesquisaPorValor}>Filtra por valor</button>
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
        {this.state.produtosPesquisa.map(elemento => {
          return (
            <div>
              <Produtos
              key={this.state.produtosPesquisa.indexOf(elemento)}
              id={elemento.id}
              nome={elemento.nome}
              valorProduto={elemento.valorProduto}
              imgUrl={elemento.imgUrl}
              botaoAdicionaC={this.adicionarCarrinho}
              indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
            />
            </div>
          )
        })}
      </div>
    )
    const carrinhoContent = (
      <div>
        <p>{somaCarrinho}</p>
        {arrayCarrinho.map(elemento => {
          return (
            <div>
                          <Carrinho
              key={this.state.arrayDeProdutos.indexOf(elemento)}
              id={elemento.id}
              imgUrl={elemento.imgUrl}
              nome={elemento.nome}
              valorProduto={elemento.valorProduto}
              indexProduto={this.state.arrayDeProdutos.indexOf(elemento)}
              botaoRemoveC={this.removerCarrinho}
            />
            </div>
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
