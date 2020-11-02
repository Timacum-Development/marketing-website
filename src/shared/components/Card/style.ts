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
`;

export const SecondCard = styled.div`
	background-color: ${color.lightPurple};
	border-radius: 30px;
	width: 380px;
	height: 381px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const ThirdCard = styled.div`
	width: 380px;
	border-radius: 30px;
	background-color: ${color.lightPurple};
	position: relative;
`;
