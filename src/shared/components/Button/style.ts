import styled from 'styled-components';
import { color, font } from '../../utils/styles';

export const MainButton = styled.img`
	display: block;
	width: 60px;
	height: 60px;
	cursor: pointer;

	&:hover {
		filter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(129deg)
			brightness(200%) contrast(105%);
	}
`;
