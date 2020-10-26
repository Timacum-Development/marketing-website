import styled from 'styled-components';
import background from '../../../assets/background.png';

export const Hero = styled.section`
	width: 100%;
	height: 100vh;
}
`;

export const HeroBg = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
	height: 1542px;
	background: url(${background}) no-repeat top left;
	background-size: cover;
	position: relative;
	top: -400px;
	left: 120px;
`;

export const HeroIntro = styled.div`
	min-width: 557px;
	margin-left: 16px;
	position: absolute;
	top: 50%;
`;

export const MainTitle = styled.h1`
	font-size: 5rem;
	line-height: 7.5rem;
	letter-spacing: 2.4px;
	margin-bottom: 40px;
`;

export const MainTitleFirst = styled.span`
	display: block;
	font-size: 3.125rem;
	line-height: 4.75rem;
	letter-spacing: 1.5px;
`;

export const MainTitleSecond = styled.span`
	display: block;
	font-size: 3.75rem;
	line-height: 5.625rem;
	letter-spacing: 1.8px;
`;

export const MainText = styled.p`
	text-align: left;
	max-width: 484px;
	margin-bottom: 40px;
`;

export const IntroBtns = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;
