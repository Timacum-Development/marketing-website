import styled from 'styled-components';
import { color, font } from '../../../shared/utils/styles';

// Assets
import background from '../../../assets/background.png';
import laptop from '../../../assets/laptop.png';

export const Hero = styled.div`
	height: calc(100vh - 60px); 
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding-bottom: 350px;
}
`;

export const HeroWrapper = styled.section`
	position: relative;
	overflow: hidden;
`;

export const HeroBg = styled.div`
	width: 100%;
	height: 1542px;
	background: url(${background}) no-repeat top left;
	background-size: cover;
	position: absolute;
	top: -420px;
	left: 124px;
`;

export const HeroIntro = styled.div`
	min-width: 557px;
	z-index: 10;
	padding-top: 245px;
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
	position: relative;
`;

export const AboutUs = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 180px;
`;

export const AboutUsImg = styled.div`
	width: 50%;
	max-width: 777px;
	height: 0;
	padding-bottom: 652px;
	background: url(${laptop}) no-repeat;
	background-size: cover;
	margin-right: 63px;
`;

export const AboutUsWrap = styled.div`
	max-width: 520px;
`;

export const ThirdTitle = styled.h3`
	text-transform: capitalize;
	margin-bottom: 40px;
	text-align: left;
`;

export const Line = styled.div`
	width: 100px;
	height: 2px;
	background-color: ${color.white};
	position: relative;
	top: 25px;
`;

export const SmallText = styled.p`
	font-size: 1rem;
	line-height: 1.625rem;
	letter-spacing: 0.48px;
	margin-bottom: 40px;

	&:first-of-type {
		font-size: 1.375rem;
		line-height: 2rem;
		letter-spacing: 0.66px;
	}
`;

export const AboutLineWrap = styled.div`
	width: 660px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
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
	margin-bottom: 180px;
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

export const PurpleWrap = styled.section`
	background-color: ${color.purple};
	padding: 180px 0;
`;

export const Services = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 180px;
`;

export const CardWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	&:nth-child(1) {
		margin-bottom: 0;
	}
`;

export const InsideCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const CardText = styled.div`
	max-width: 510px;
`;

export const SmallTxt = styled.p`
	font-size: 1rem;
	line-height: 1.625rem;
	letter-spacing: 0.48px;
`;

export const Portfolio = styled.section`
	display: block;
	padding-bottom: 180px;
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 62px;
`;

export const Blog = styled.section``;

export const FooterService = styled.div`
	width: 100%;
	position: relative;
`;

export const ServiceWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const DoubleShape = styled.img`
	display: block;
	width: 484px;
	height: 597px;
	position: relative;
	left: -200px;
	top: -180px;
`;
export const Letter = styled.img`
	display: block;
	width: 173px;
	height: 196px;
	margin-bottom: 40px;
`;

export const Circle = styled.img`
	display: block;
	width: 190px;
	height: 148px;
	position: absolute;
	right: 0;
	top: 150px;
`;

export const ServiceTextWrap = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	position: absolute;
  top: 130px;
}
`;

export const ServiceTitle = styled.h2`
	margin-bottom: 0;
	text-align: center;
`;

export const ServiceText = styled.p`
	text-align: center;
	font-size: 1rem;
	line-height: 1.625rem;
	letter-spacing: 0.48px;
	max-width: 510px;
	margin-bottom: 40px;
`;

export const SubscribeWrap = styled.div`
	width: 100%;
	max-width: 667px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;
`;

export const Email = styled.input`
	width: 667px;
	border: 1px solid ${color.white};
	border-radius: 40px;
	background-color: ${color.lavander};
	padding: 29px 0 29px 29px;
	outline: none;

	&::placeholder {
		color: ${color.white};
	}
`;

export const Subscribe = styled.input`
	padding: 19px 58px;
	border-radius: 40px;
	background-color: ${color.white};
	outline: none;
	border: none;
	position: absolute;
	right: 10px;
	top: 10px;
	color: ${color.lightPurple};
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		background-color: ${color.lightPurple};
		color: ${color.white};
	}
`;

export const MainFooter = styled.footer`
	width: 100%;
`;

export const FooterCard = styled.div`
	width: 25%;

	&:nth-child(1) {
		max-width: 380px;
	}

	&:nth-child(2) {
		max-width: 240px;
	}

	&:nth-child(3) {
		max-width: 240px;
		padding-top: 40px;
	}

	&:nth-child(4) {
		max-width: 380px;
	}
`;

export const FooterCardWrap = styled.div`
	width: 1514px;
	padding-top: 80px;
	margin-bottom: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const FooterLine = styled.div`
	width: 100%;
	border: 1px solid ${color.lightLavander};
	margin-bottom: 40px;
`;

export const IconWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const SocialIcon = styled.div``;

export const Icon = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 15px;
`;

export const FooterText = styled.p`
	font-size: 1rem;
	line-height: 1.625rem;
	letter-spacing: 0.48px;
	text-align: left;
	margin-top: 20px;
	font-weight: 300;
`;

export const FooterLink = styled.a`
	display: inline-block;
	width: 100%;
	font-size: 1rem;
	line-height: 2.25rem;
	margin-bottom: 5px;
	color: ${color.white};
	font-style: italic;
	font-weight: 300;
	transition: 0.3s;

	&:hover {
		color: ${color.lighterLavander};
	}
`;

export const FooterHeading = styled.h4`
	text-transform: uppercase;
`;

export const Shape = styled.img`
	display: block;
	width: 179px;
	height: 179px;
	position: absolute;
  top: -75px;
	left: -100px;
}
`;

export const ShapeSecond = styled.img`
	display: block;
	width: 404px;
	height: 387px;
	position: absolute;
	right: -100px;
	top: -70px;
`;
