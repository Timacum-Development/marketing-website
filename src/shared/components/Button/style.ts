import styled from 'styled-components';

export const MainButton = styled.img`
	display: block;
	width: 60px;
	height: 60px;
	cursor: pointer;

	&:hover {
		filter: invert(100%) sepia(0%) saturate(7481%) hue-rotate(129deg)
			brightness(200%) contrast(105%);
	}

	@media (max-width: 375px) {
		&.top {
			position: absolute;
			top: 0;
		}

		&.left {
			position: absolute;
			bottom: -40px;
			left: 30%;
		}

		&.right {
			position: absolute;
			bottom: -40px;
			right: 25%;
			margin-right: 18px;
		}
	}
`;
