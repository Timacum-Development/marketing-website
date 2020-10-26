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
	color: ${color.lightPurple};
	background-color: ${color.white};
`;
