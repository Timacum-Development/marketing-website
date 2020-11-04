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

	.container-fluid {
		width: 100%;
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
		color: ${color.white}; 
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	/* .App {
		overflow-x: hidden;
	} */

	p {
		font-size: 1.25rem;
		line-height: 1.875rem;
		letter-spacing: 0.6px;
		font-style: italic;
		font-weight: 300;

		@media (max-width: 375px) {
			font-size: 0.875rem;
			letter-spacing: 0.42px;
		}
	}

	h2 {
		font-size: 2.5rem;
		line-height: 3.75rem;
		letter-spacing: 1.2px;

		@media (max-width: 375px) {
			font-size: 1.5rem;
			line-height: 2.1875rem;
			letter-spacing: 0.72px;
		}
	}

	h3 {
		font-size: 1.875rem;
		line-height: 2.875rem;
		letter-spacing: 0.9px;
	}

	h4 {
		font-size: 1.25rem;
		line-height: 1.875rem;
		letter-spacing: 0.6px;
		margin-bottom: 10px;
	}

`;
