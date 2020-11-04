import styled from 'styled-components';
import { color, font } from '../../utils/styles';

export const ImgCard = styled.img`
	display: block;
	width: 120px;
	height: 120px;
	margin-right: 40px;

	@media (max-width: 375px) {
		margin-right: 0;
	}
`;

export const PortfolioImg = styled.img`
	width: 380px;
	height: 242px;
`;
