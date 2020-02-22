import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
    }
`
const InfoProduto = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
p,h5 {
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  &:first-child {
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
const DivBotao = styled.div`
background-color: #001021;
display: flex;
img {
  width: 10%;
  height: 10%;
  align-self: center;
  padding-left: 20px;
}
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
          <div><h5>{this.props.nome}</h5></div>
          <div><p>R$ {this.props.valorProduto}</p></div>
          <DivBotao>
            <img src={require("../img/cartadd.png")}/>
            <BotaoAdicionar onClick={() => {this.props.botaoAdicionaC(this.props.indexProduto)}}>Adicionar ao Carrinho</BotaoAdicionar>
          </DivBotao>
        </InfoProduto>
      </ProdutoContainer>
    )
  }
}

export default Produtos;