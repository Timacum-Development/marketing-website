import styled from 'styled-components';
import { color, font } from '../../shared/utils/styles';

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

export const Burger = styled.div`
	display: none;
	width: 43px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
`;

export const BurgerLine = styled.div`
	display: none;
	height: 3px;
	width: 43px;
	background-color: ${color.white};
	margin-bottom: 7px;

	&:nth-child(1) {
		width: 22px;
	}

	&:nth-child(3) {
		width: 22px;
		margin-bottom: 0;
	}
`;

export const Navigation = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media (max-width: 375px) {
		width: 335px;
		justify-content: space-between;

		${NavigationLink} {
			display: none;

			&:first-of-type {
				display: block;
			}
		}

		${Burger} {
			display: block;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}

		${BurgerLine} {
			display: block;
		}
	}
`;
