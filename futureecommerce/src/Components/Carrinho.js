import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0;
padding: 0;
width: 100%;
`
const InfoProduto = styled.div`
width: 100%;
`
const TituloDoProduto = styled.div`
width: 100%;
font-size: smaller;
`
const ContainerImg = styled.div``

const Img = styled.img`
width: 50px;
border-radius: 10%;
`
const ContainerValorEQtd = styled.div``
const ValorEQtd = styled.div`
display: flex;
flex-direction: column;
font-size: smaller;`

const ContainerBotoes = styled.div`
display: flex;
flex-direction: row;`

const Botao = styled.button``

class Carrinho extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<ProdutoContainer>
				<ContainerImg>
					<Img src={this.props.imgUrl} />
				</ContainerImg>
				<InfoProduto>
					<TituloDoProduto>
						<p>{this.props.nome}</p>
					</TituloDoProduto>
					<ContainerValorEQtd>
						<ValorEQtd>
							<p>R$ {this.props.valorProduto}</p>
							<p>Qtd: {this.props.quantidadeItem}</p>
						</ValorEQtd>
						<ContainerBotoes>
							<Botao onClick={() => {this.props.botaoAdiciona(this.props.indexProduto)}}>+</Botao>
							<Botao onClick={() => {this.props.botaoDiminui(this.props.indexProduto)}}>-</Botao>
							<Botao onClick={() => {this.props.botaoRemoveC(this.props.indexProduto)}}>Remover</Botao>
						</ContainerBotoes>
					</ContainerValorEQtd>
				</InfoProduto>
			</ProdutoContainer>
		)
	}
}

export default Carrinho;