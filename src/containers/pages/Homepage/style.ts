import styled from 'styled-components';
import { color, font } from '../../../shared/utils/styles';

// Assets
import background from '../../../assets/background.png';
import laptop from '../../../assets/laptop.png';
import backgroundmobile from '../../../assets/hero-mobile.svg';

export const Hero = styled.div`
	height: calc(100vh - 60px); 
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding-bottom: 350px;

	@media (max-width: 375px) {
		padding-bottom: 120px;
	}
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

	@media (max-width: 375px) {
		background: url(${backgroundmobile}) no-repeat center;
		left: 0;
		top: -520px;
	}
`;

export const MainTitle = styled.h1`
	font-size: 5rem;
	line-height: 7.5rem;
	letter-spacing: 2.4px;
	margin-bottom: 40px;

	@media (max-width: 375px) {
		font-size: 2.8125rem;
		line-height: 4.25rem;
		letter-spacing: 1.35px;
		text-align: center;
		margin-bottom: 20px;
	}
`;

export const HeroIntro = styled.div`
	min-width: 557px;
	z-index: 10;
	padding-top: 245px;

	 @media (max-width: 375px) {
		padding-top: 80px;
		min-width: 335px;
		position: absolute;
    top: 431px;
		}
	} 
`;

export const MainTitleFirst = styled.span`
	display: block;
	font-size: 3.125rem;
	line-height: 4.75rem;
	letter-spacing: 1.5px;

	@media (max-width: 375px) {
		font-size: 1.75rem;
		line-height: 2.625rem;
		letter-spacing: 0.84px;
	}
`;

export const MainTitleSecond = styled.span`
	display: block;
	font-size: 3.75rem;
	line-height: 5.625rem;
	letter-spacing: 1.8px;

	@media (max-width: 375px) {
		font-size: 2.125rem;
		line-height: 3.1875rem;
		letter-spacing: 1.02px;
	}
`;

export const MainText = styled.p`
	text-align: left;
	max-width: 484px;
	margin-bottom: 40px;

	@media (max-width: 375px) {
		font-size: 1rem;
		line-height: 1.875rem;
		letter-spacing: 0.48px;
		text-align: center;
		margin-bottom: 20px;
	}
`;

export const IntroBtns = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media (max-width: 375px) {
		justify-content: center;
	}
`;

export const Partners = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 375px) {
		padding: 0 0 120px 0;
		overflow-x: hidden;
	}
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

	@media (max-width: 375px) {
		margin-bottom: 40px;
	}
`;

export const LogoWrap = styled.div`
	width: 100%;
	max-width: 1360px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 180px;

	@media (max-width: 375px) {
		margin-bottom: 0;
		position: relative;
		justify-content: space-around;
	}
`;

export const TextWrap = styled.div`
	position: relative;

	@media (max-width: 375px) {
		&.text-padding {
			padding: 0 42px;
		}
		padding: 0 15px;
	}
`;

export const AboutUs = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 180px;

	@media (max-width: 375px) {
		padding-bottom: 120px;
		justify-content: center;
	}
`;

export const AboutUsImg = styled.div`
	width: 50%;
	max-width: 777px;
	height: 0;
	padding-bottom: 652px;
	background: url(${laptop}) no-repeat;
	background-size: cover;
	margin-right: 63px;

	@media (max-width: 375px) {
		width: 333px;
		height: 280px;
		padding-bottom: 0;
		background-size: contain;
		margin-right: 0;
	}
`;

export const AboutUsWrap = styled.div`
	max-width: 520px;

	@media (max-width: 375px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 61px 20px 0 20px;
	}
`;

export const ThirdTitle = styled.h3`
	text-transform: capitalize;
	margin-bottom: 40px;
	text-align: left;

	@media (max-width) {
		margin-bottom: 20px;
	}
`;

export const Line = styled.div`
	width: 100px;
	height: 2px;
	background-color: ${color.white};
	position: relative;
	top: 25px;

	@media (max-width: 375px) {
		display: none;
	}
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

	@media (max-width: 375px) {
		margin-bottom: 20px;

		&:first-of-type {
			font-size: 1.125rem;
			letter-spacing: 0.54px;
		}

		&:last-of-type {
			margin-bottom: 40px;
		}
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

	@media (max-width: 375px) {
		max-width: 375px;
	}
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

	@media (max-width: 375px) {
		max-width: 332px;
		height: auto;
    padding: 80px 0;
		margin-bottom: 120px;
		justify-content: center;
		align-content: center;
		flex-direction: column;
	}
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

export const NumberLine = styled.div`
	width: 2px;
	height: 66px;
	background-color: ${color.lavander};

	@media (max-width: 375px) {
		transform: rotate(90deg);
	}
`;

export const PurpleWrap = styled.section`
	background-color: ${color.purple};
	padding: 180px 0;

	@media (max-width: 375px) {
		padding: 120px 0;
	}
`;

export const Services = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 180px;

	@media (max-width: 375px) {
		padding-bottom: 550px;
		overflow: hidden;
		position: relative;
	}
`;

export const CardWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	&:nth-child(1) {
		margin-bottom: 0;
	}

	@media (max-width: 375px) {
		&.card-wrap {
		flex-wrap: nowrap;
    position: absolute;
    top: 158px;
		left: 50%;
    transform: translateX(-45%);
		flex-direction: row-reverse;
		}
		
		&.centered-wrap {
			justify-content: center;
		}

		}
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

	@media (max-width: 375px) {
		padding-bottom: 0;
	}
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 62px;
`;

export const Blog = styled.section`
	@media (max-width: 375px) {
		position: relative;
		z-index: 1;
		overflow-x: hidden;
		padding-top: 120px;
	}
`;

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

	@media (max-width: 375px) {
		left: -148px;
		width: 256px;
		height: 315px;
	}
`;
export const Letter = styled.img`
	display: block;
	width: 173px;
	height: 196px;
	margin-bottom: 40px;

	@media (max-width: 375px) {
		width: 123px;
		height: 138px;
	}
`;

export const Circle = styled.img`
	display: block;
	width: 190px;
	height: 148px;
	position: absolute;
	right: 0;
	top: 150px;

	@media (max-width: 375px) {
		width: 126px;
		height: 98px;
		top: 90%;
	}
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

	@media (max-width: 375px) {
		position: relative;
    top: -223px;
		padding: 0 13px;
	}
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

	@media (max-width: 375px) {
		font-size: 0.875rem;
		line-height: 1.5rem;
		letter-spacing: 0.42px;
		margin: 20px 0 40px 0;
	}
`;

export const SubscribeWrap = styled.div`
	width: 100%;
	max-width: 667px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;

	@media (max-width: 375px) {
		max-width: 335px;
	}
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

	@media (max-width: 375px) {
		width: 293px;
		padding: 30px 20px 116px 20px;
		vertical-align: top;

		&::placeholder {
			font-size: 1rem;
			line-height: 1.5625rem;
			letter-spacing: 0.48px;
			text-align: center;
			margin-bottom: 50px;
		}
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

	@media (max-width: 375px) {
		width: 295px;
		left: 50%;
		transform: translateX(-50%);
		top: 100px;
	}
`;

export const MainFooter = styled.footer`
	width: 100%;
`;

export const FooterCard = styled.div`
	width: 25%;
	margin-bottom: 40px;

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
		margin-bottom: 0;
	}

	@media (max-width: 375px) {
		width: 100%;
		padding: 0 20px;

		&:nth-child(2) {
			max-width: 31%;
		}

		&:nth-child(3) {
			max-width: 40%;
		}

		&:nth-child(4) {
			max-width: 325px;
		}
	}
`;

export const FooterCardWrap = styled.div`
	width: 1514px;
	padding-top: 80px;
	margin-bottom: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 375px) {
		max-width: 375px;
		padding-top: 0;
	}
`;

export const FooterLine = styled.div`
	width: 100%;
	border: 1px solid ${color.lightLavander};
	margin-bottom: 40px;

	@media (max-width: 375px) {
		max-width: 335px;
		position: relative;
		left: 20px;
	}
`;

export const IconWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 375px) {
		justify-content: center;
	}
`;

export const SocialIcon = styled.div``;

export const Icon = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 15px;

	@media (max-width: 375px) {
		&:last-child {
			margin-right: 0;
		}
	}
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

	@media (max-width: 375px) {
		margin-bottom: 0;
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

	@media (max-width: 375px) {
		top: -120px;
    left: -61px;
	}
}
`;

export const ShapeSecond = styled.img`
	display: block;
	width: 404px;
	height: 387px;
	position: absolute;
	right: -100px;
	top: -70px;

	@media (max-width: 375px) {
		left: 200px;
		top: -30px;
		width: 240px;
		height: 229px;
		z-index: -1;
	}
`;

export const ShapeMobileFirst = styled.img`
	display: none;
	width: 128px;
	height: 108px;

	@media (max-width: 375px) {
		display: block;
		position: relative;
		left: -44px;
		top: 60px;
	}
`;

export const ShapeMobileSecond = styled.img`
	display: none;
	width: 91px;
	height: 92px;

	@media (max-width: 375px) {
		display: block;
		position: relative;
		left: 310px;
	}
`;
