import styled from 'styled-components';
import { color, font } from '../../shared/utils/styles';

export const Navigation = styled.nav`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const NavigationLink = styled.a`
	font-size: 1.25rem;
	line-height: 1.25rem;
	font-weight: 300;
	font-style: italic;
	color: ${color.white};
	padding: 0 40px;
	transition: 0.3s;

	&:first-child {
		padding: 0;
	}

	&:hover {
		color: ${color.lighterLavander};
	}
`;

export const Logo = styled.img`
	display: block;
	width: 50px;
	height: 50px;
`;
