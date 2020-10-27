import styled from 'styled-components';
import { color, font } from '../../../shared/utils/styles';

// Assets
import background from '../../../assets/background.png';
import laptop from '../../../assets/laptop.png';

export const Hero = styled.section`
	height: calc(100vh - 60px);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 200px;
}
`;

export const HeroBg = styled.div`
	width: 100%;
	height: 1542px;
	background: url(${background}) no-repeat top left;
	background-size: cover;
	position: absolute;
	top: -400px;
	left: 120px;
`;

export const HeroIntro = styled.div`
	min-width: 557px;
	margin-left: 16px;
	z-index: 10;
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

export const Partners = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Text = styled.p`
	text-transform: capitalize;
	text-align: center;
	margin-bottom: 10px;
`;

export const SecondTitle = styled.h2`
	text-transform: capitalize;
	text-align: center;
	margin-bottom: 60px;
`;

export const LogoWrap = styled.div`
	width: 100%;
	max-width: 1360px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 180px;
`;

export const TextWrap = styled.div`
	margin-top: 250px;
`;

export const AboutUs = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const AboutUsImg = styled.div`
	width: 50%;
	max-width: 777px;
	height: 652px;
	background: url(${laptop}) no-repeat;
	background-size: cover;
`;

export const AboutUsWrap = styled.div`
	width: 50%;
	max-width: 520px;
`;

export const ThirdTitle = styled.h3`
	text-transform: capitalize;
	text-align: center;
	margin-bottom: 40px;
	text-align: left;
	/* position: relative;

	&:before {
		content: '';
		width: 100px;
		height: 2px;
		background-color: ${color.white};
		position: absolute;
	} */
`;

export const Line = styled.div`
	width: 100px;
	height: 2px;
	background-color: ${color.white};
	position: relative;
	top: 25px;
	right: -80px;
`;

export const AboutText = styled.p`
	font-size: 1rem;
	line-height: 1.625rem;
	letter-spacing: 0.48px;
	font-family: 'Roboto, sans-serif';
	margin-bottom: 40px;

	&:first-child {
		font-size: 1.375rem;
		line-height: 2rem;
		letter-spacing: 0.66px;
	}
`;

export const Numbers = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const NumbersWrap = styled.div`
	width: 100%;
	height: 250px;
	background-color: ${color.purple};
	border: 1px solid ${color.lightLavander};
	border-radius: 139px;
	display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
`;

export const LargeNumber = styled.span`
	display: inline-block;
	font-size: 6.25rem;
	line-height: 9.375rem;
	letter-spacing: 3px;
	color: ${color.white};
	font-weight: 700;
`;

export const LargeNumberWrap = styled.div`
	display: block;
`;
