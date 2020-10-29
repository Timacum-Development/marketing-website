import styled from 'styled-components';
import { color, font } from '../../utils/styles';

export const LinkFirst = styled.a`
	color: ${color.white};
	background-color: transparent;
	border: 2px solid ${color.white};
	border-radius: 40px;
	transition: 0.3s;

	&:hover {
		color: ${color.lightPurple};
		background-color: ${color.white};
	}

	&.full {
		color: ${color.lightPurple};
		background-color: ${color.white};
		border-radius: 40px;
		margin-right: 20px;

		&:hover {
			color: ${color.white};
			background-color: transparent;
		}
	}
`;

export const LinkSecond = styled.a`
	display: block;
`;

export const LinkThird = styled.a`
	width: 80px;
	height: 80px;
	background-color: ${color.purple};
	border-top-left-radius: 30px;
	border-bottom-right-radius: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	bottom: 0;
`;
