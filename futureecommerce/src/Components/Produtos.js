import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
  border: 1pt solid black;
  display: flex;
  flex-direction: column;
`
const InfoProduto = styled.div`
  
`
const Imagem = styled.img`
  max-width: 100%;
`

const BotaoAdicionar = styled.button``

class Produtos extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <ProdutoContainer>
        <div>
          <Imagem src={this.props.imgUrl} />
        </div>
        <InfoProduto>
          <p>{this.props.nome}</p>
          <p>{this.props.valorProduto}</p>
          <BotaoAdicionar onClick={() => {this.props.botaoAdicionaC(this.props.indexProduto)}}>Adicionar ao Carrinho</BotaoAdicionar>
        </InfoProduto>
      </ProdutoContainer>
    )
  }
}

export default Produtos;