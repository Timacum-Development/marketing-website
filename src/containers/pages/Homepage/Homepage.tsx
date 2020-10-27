import React from 'react';
import { MainLink, Button } from '../../../shared/components/';
import {
	Hero,
	HeroIntro,
	MainTitle,
	HeroBg,
	MainTitleFirst,
	MainTitleSecond,
	MainText,
	IntroBtns,
	Partners,
	Text,
	SecondTitle,
	LogoWrap,
	TextWrap,
	AboutUs,
	AboutUsImg,
	AboutUsWrap,
	ThirdTitle,
	Line,
	AboutText,
	Numbers,
	NumbersWrap,
	LargeNumber,
	LargeNumberWrap,
} from './style';

// Assets
import play from '../../../assets/play-button-right.svg';
import RightArrow from '../../../assets/arrow-right.svg';
import LeftArrow from '../../../assets/arrow-left.svg';
import Logo1 from '../../../assets/logo1.png';
import Logo2 from '../../../assets/logo2.png';
import Logo3 from '../../../assets/logo3.png';
import Logo4 from '../../../assets/logo4.png';
import Logo5 from '../../../assets/logo5.png';

import { LinkSecond } from '../../../shared/components/Link/style';

const Homepage = () => {
	return (
		<React.Fragment>
			<Hero className='container'>
				<HeroBg />
				<HeroIntro>
					<MainTitle>
						<MainTitleFirst>We help to </MainTitleFirst>Solve Clients
						<MainTitleSecond>Problems</MainTitleSecond>
					</MainTitle>
					<MainText>
						Our Activate suite of business apps gives your Lorem ipsum dolor sit
						amet, consectetur.
					</MainText>
					<IntroBtns>
						<MainLink
							href='#'
							text='Our Portfolio'
							style={{ padding: '18px 92px 19px 92px' }}
							full
						/>
						<Button btnUrl={play} alt='' />
					</IntroBtns>
				</HeroIntro>
			</Hero>
			<Partners className='container'>
				<TextWrap>
					<Text>These companies trust us</Text>
					<SecondTitle>With their marketing</SecondTitle>
				</TextWrap>
				<LogoWrap>
					<Button btnUrl={LeftArrow} alt='' />
					<MainLink icon logoUrl={Logo1} />
					<MainLink icon logoUrl={Logo2} />
					<MainLink icon logoUrl={Logo3} />
					<MainLink icon logoUrl={Logo4} />
					<MainLink icon logoUrl={Logo5} />
					<Button btnUrl={RightArrow} alt='' />
				</LogoWrap>
			</Partners>
			<AboutUs className='container'>
				<AboutUsImg />
				<Line />
				<AboutUsWrap>
					<ThirdTitle>About us</ThirdTitle>
					<AboutText>
						Simple! Our mission is to become the best design agency in the
						world!
					</AboutText>
					<AboutText>
						What’s an outsourced marketing un-agency, you say? Well, we’re the
						antithesis to your run-of-the-mill agency that oversells and
						underdelivers.
					</AboutText>
					<AboutText>
						Lately, it’s been about closing the biggest contracts. But what
						about making the biggest impact for clients? Our goal is to get
						RESULTS that will make clients HAPPY without overpricing.
					</AboutText>
					<AboutText>
						Feeling skeptical? Work with us, and see the difference between
						getting marketing partners invested in your growth, versus salesmen
						invested in milking you dry!
					</AboutText>
					<MainLink
						href='#'
						text='Lets talk!'
						style={{
							padding: '18px 76px 19px 76px',
							textTransform: 'uppercase',
						}}
						full
					/>
				</AboutUsWrap>
			</AboutUs>
			<Numbers className='container'>
				<TextWrap>
					<Text>Company Website Design Full Services.</Text>
					<SecondTitle>
						Digital Marketing Agency & Software Development
					</SecondTitle>
				</TextWrap>
				<NumbersWrap>
					<LargeNumberWrap>
						<LargeNumber>16K</LargeNumber>
						<Text>Clients</Text>
					</LargeNumberWrap>
					<LargeNumberWrap>
						<LargeNumber>189+</LargeNumber>
						<Text>Team Members</Text>
					</LargeNumberWrap>
					<LargeNumberWrap>
						<LargeNumber>13K</LargeNumber>
						<Text>Active Work</Text>
					</LargeNumberWrap>
				</NumbersWrap>
			</Numbers>
		</React.Fragment>
	);
};
export default Homepage;
