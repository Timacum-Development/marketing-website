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
} from './style';

// Assets
import play from '../../../assets/play-button-right.svg';

const Homepage = () => {
	return (
		<Hero>
			<HeroBg>
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
						<Button src={play} alt='' />
					</IntroBtns>
				</HeroIntro>
			</HeroBg>
		</Hero>
	);
};
export default Homepage;
