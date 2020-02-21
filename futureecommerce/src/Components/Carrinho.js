import React, { Component } from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
  display: flex;
`
const InfoProduto = styled.div`
`

const TituloDoProduto = styled.div``

const ContainerImg = styled.div``

const Img = styled.img`
	width: 50px;
	border-radius: 50%;
`

const ContainerValorEQtd = styled.div``

const ValorEQtd = styled.div``

const ContainerBotoes = styled.div``

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
							<p>{this.props.valorProduto}</p>
							<p>{this.props.qtd}</p>
							<p>{this.props.quantidadeItem}</p>
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