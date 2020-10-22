import styled from 'styled-components';
import { color, font } from '../../shared/utils/styles';

export const Navigation = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const NavigationLink = styled.a`
	font-size: 1.25rem;
	line-height: 1.25rem;
	font-weight: 300;
	color: ${color.white};
`;

export const Logo = styled.img`
	display: block;
	width: 50px;
	height: 50px;
	margin-right: 40px;
`;
