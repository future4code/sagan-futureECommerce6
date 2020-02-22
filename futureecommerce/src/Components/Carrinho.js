import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
width: 100%;
img {
width: 130px;
border: 1pt solid lightgray;
}
`
const TituloDoProduto = styled.div`
font-size: smaller;
text-align: justify;
padding-right: 5px;
`
const ValorEQtd = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
font-size: smaller;
font-weight: bold;
padding: 3px;
`

const ContainerBotoes = styled.div`
display: flex;
flex-direction: row;
button {
padding: 2px;
flex-grow: 1;
}
`
const ConteinerInfo = styled.div`
background-color: #001021;
color: white;
`

class Carrinho extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<ProdutoContainer>
				<img src={this.props.imgUrl} />
				<ConteinerInfo>
					<TituloDoProduto>
						<p>{this.props.nome}</p>
					</TituloDoProduto>
					<div>
						<ValorEQtd>
							<p>R$ {this.props.valorProduto}</p>
							<p>Qtd: {this.props.quantidadeItem}</p>
						</ValorEQtd>
						<ContainerBotoes>
							<button onClick={() => {this.props.botaoAdiciona(this.props.indexProduto)}}>+</button>
							<button onClick={() => {this.props.botaoDiminui(this.props.indexProduto)}}>-</button>
							<button onClick={() => {this.props.botaoRemoveC(this.props.indexProduto)}}>Remover</button>
						</ContainerBotoes>
					</div>
				</ConteinerInfo>
			</ProdutoContainer>
		)
	}
}

export default Carrinho;