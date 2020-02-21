import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
  /* border: 1pt solid black; */
  display: flex;
  flex-direction: column;
margin: 0;
padding: 0;
width: 100%;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    }
`
const InfoProduto = styled.div`
p {
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  &:first-child {
    font-weight: bold;
    text-transform: uppercase;
  }
  background-color: #247BA0;
  color: white;
}

  
`
const BotaoAdicionar = styled.button`
background-color: #001021;
color: #EAF2EF;
width: 100%;
height: 100%;
margin: 0;
padding: 10px;
border: 0;
border-radius: 0 0 5px 5px;
`

class Produtos extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <ProdutoContainer>
        <div>
          <img src={this.props.imgUrl} />
        </div>
        <InfoProduto>
          <p>{this.props.nome}</p>
          <p>R$ {this.props.valorProduto}</p>
          <BotaoAdicionar onClick={() => {this.props.botaoAdicionaC(this.props.indexProduto)}}>Adicionar ao Carrinho</BotaoAdicionar>
        </InfoProduto>
      </ProdutoContainer>
    )
  }
}

export default Produtos;