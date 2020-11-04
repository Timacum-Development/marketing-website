import styled from 'styled-components';

export const HeaderWrap = styled.header`
	width: 100%;
	height: 60px;
	padding-top: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 20;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: 375px) {
		padding: 20px;
	}
`;
