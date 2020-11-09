import styled from 'styled-components';
import { color, font } from '../../utils/styles';

export const MainCard = styled.div`
	background-color: ${color.lightPurple};
	border-radius: 30px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 49%;
	margin-bottom: 40px;
	padding: 65px 0 65px 40px;
	box-sizing: border-box;
	position: relative;

	&:nth-child(3) {
		margin-bottom: 0;
	}

	&:nth-child(4) {
		margin-bottom: 0;
	}

	@media (max-width: 375px) {
		margin-bottom: 0;
		padding: 30px 30px 95px 30px;
		min-width: 355px;
		margin-right: 20px;
	}
`;

export const SecondCard = styled.div`
	background-color: ${color.lightPurple};
	border-radius: 30px;
	width: 23.2%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 375px) {
		width: 100%;

		&:nth-child(2) {
			display: none;
		}

		&:nth-child(3) {
			display: none;
		}

		&:nth-child(4) {
			display: none;
		}
	}
`;

export const ThirdCard = styled.div`
	width: 23.2%;
	border-radius: 30px;
	background-color: ${color.lightPurple};
	position: relative;

	@media (max-width: 375px) {
		width: 100%;

		&:nth-child(2) {
			display: none;
		}

		&:nth-child(3) {
			display: none;
		}

		&:nth-child(4) {
			display: none;
		}
	}
`;
