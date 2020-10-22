import { createGlobalStyle } from 'styled-components';
import { color, font } from './utils/styles';

export default createGlobalStyle`
	body,
	html {
		height: 100%;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif, 'Roboto', sans-serif;
		font-size: 16px;
		background-color: ${color.lightPurple};
	}

	.container {
		max-width: 1640px;
		width: 100%;
		margin: 0 auto;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		text-align: left;
	}

	a {
		display: inline-block;
	}
`;
