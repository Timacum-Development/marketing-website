import React from 'react';
import { MainLink, Button, Card, CardImg } from '../../../shared/components/';

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
	SmallText,
	Numbers,
	NumbersWrap,
	LargeNumber,
	LargeNumberWrap,
	AboutLineWrap,
	PurpleWrap,
	Services,
	CardWrap,
	InsideCard,
	CardText,
	Portfolio,
	ButtonWrap,
	Blog,
	FooterService,
	ServiceWrap,
	DoubleShape,
	Letter,
	Circle,
	ServiceTitle,
	ServiceTextWrap,
	ServiceText,
	SubscribeWrap,
	Email,
	Subscribe,
	MainFooter,
	FooterCard,
	FooterLine,
	IconWrap,
	SocialIcon,
	Icon,
	FooterText,
	FooterLink,
	FooterHeading,
	Shape,
	ShapeSecond,
} from './style';

import { Logo } from '../../general/style';

// Assets
import play from '../../../assets/play-button-right.svg';
import RightArrow from '../../../assets/arrow-right.svg';
import LeftArrow from '../../../assets/arrow-left.svg';
import Logo1 from '../../../assets/logo1.png';
import Logo2 from '../../../assets/logo2.png';
import Logo3 from '../../../assets/logo3.png';
import Logo4 from '../../../assets/logo4.png';
import Logo5 from '../../../assets/logo5.png';
import Img1 from '../../../assets/card-img1.svg';
import Img2 from '../../../assets/card-img2.svg';
import Img3 from '../../../assets/card-img3.svg';
import Img4 from '../../../assets/card-img4.svg';
import ImgPlus from '../../../assets/plus.svg';
import People1 from '../../../assets/portfolio1.svg';
import People2 from '../../../assets/portfolio2.svg';
import People3 from '../../../assets/portfolio3.svg';
import People4 from '../../../assets/portfolio4.svg';
import Post1 from '../../../assets/office.png';
import Post2 from '../../../assets/office2.png';
import Post3 from '../../../assets/office3.png';
import Post4 from '../../../assets/bussines.png';
import FooterImg1 from '../../../assets/double-shape.png';
import FooterImg2 from '../../../assets/letter.png';
import FooterImg3 from '../../../assets/circle.png';
import LogoFooter from '../../../assets/logo.svg';
import Facebook from '../../../assets/facebook.svg';
import Twitter from '../../../assets/twitter.svg';
import Youtube from '../../../assets/youtube.svg';
import Instagram from '../../../assets/instagram.svg';
import Shape1 from '../../../assets/circle-blurred.png';
import Shape2 from '../../../assets/purple-shape.png';

import { LinkSecond } from '../../../shared/components/Link/style';
import { ImgCard } from '../../../shared/components/CardImage/style';

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
					<MainLink icon logoUrl={Logo5} />
					<MainLink icon logoUrl={Logo1} />
					<MainLink icon logoUrl={Logo2} />
					<MainLink icon logoUrl={Logo3} />
					<MainLink icon logoUrl={Logo4} />
					<Button btnUrl={RightArrow} alt='' />
				</LogoWrap>
			</Partners>
			<AboutUs className='container'>
				<AboutUsImg />
				<AboutLineWrap>
					<Line />
					<AboutUsWrap>
						<ThirdTitle>About us</ThirdTitle>
						<SmallText>
							Simple! Our mission is to become the best design agency in the
							world!
						</SmallText>
						<SmallText>
							What’s an outsourced marketing un-agency, you say? Well, we’re the
							antithesis to your run-of-the-mill agency that oversells and
							underdelivers.
						</SmallText>
						<SmallText>
							Lately, it’s been about closing the biggest contracts. But what
							about making the biggest impact for clients? Our goal is to get
							RESULTS that will make clients HAPPY without overpricing.
						</SmallText>
						<SmallText>
							Feeling skeptical? Work with us, and see the difference between
							getting marketing partners invested in your growth, versus
							salesmen invested in milking you dry!
						</SmallText>
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
				</AboutLineWrap>
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
			<PurpleWrap className='container-fluid'>
				<Services className='container'>
					<TextWrap>
						<Text>We are a digital agency</Text>
						<SecondTitle>Experts services to change business</SecondTitle>
					</TextWrap>
					<CardWrap>
						<Card
							heading='Link Building'
							text='We ll earn white hat backlinks and send qualified traffic to your business through guest posting.'
							url={Img1}
							plus
							cross={ImgPlus}
						/>
						<Card
							heading='SEO Services'
							text='From content creation to consulting and keyword research, we can help you outrank your competition.'
							url={Img2}
							plus
							cross={ImgPlus}
						/>
						<Card
							heading='Web Design & Development'
							text='We make websites that dont just look great, but are also optimized for UX, conversions, and search engine visibility.'
							url={Img3}
							plus
							cross={ImgPlus}
						/>
						<Card
							heading='Done-For-You Marketing'
							text='Outsource all your marketing needs to a dedicated marketing team handpicked just for your business.'
							plus
							url={Img4}
							cross={ImgPlus}
						/>
					</CardWrap>
				</Services>
				<Portfolio className='container'>
					<TextWrap>
						<Shape src={Shape1} />
						<Text>Awesome Portfolio</Text>
						<SecondTitle>We Have A Great Portfolio To Check</SecondTitle>
					</TextWrap>
					<CardWrap>
						<Card
							portfolio={People1}
							heading='Web Design project'
							text='UX/UI Design'
							project
							style={{ textAlign: 'center' }}
						/>
						<Card
							portfolio={People2}
							heading='Web Design project'
							text='UX/UI Design'
							project
							style={{ textAlign: 'center' }}
						/>
						<Card
							portfolio={People3}
							heading='Web Design project'
							text='UX/UI Design'
							project
							style={{ textAlign: 'center' }}
						/>
						<Card
							portfolio={People4}
							heading='Web Design project'
							text='UX/UI Design'
							project
							style={{ textAlign: 'center' }}
						/>
					</CardWrap>
					<ButtonWrap>
						<Button style={{ marginRight: '20px' }} btnUrl={LeftArrow} alt='' />
						<Button btnUrl={RightArrow} alt='' />
					</ButtonWrap>
				</Portfolio>
				<Blog className='container'>
					<TextWrap>
						<Text>Our Blogs</Text>
						<SecondTitle>Our Blog & article</SecondTitle>
						<ShapeSecond src={Shape2} />
					</TextWrap>
					<CardWrap>
						<Card
							text='August 27, 2020'
							portfolio={Post3}
							heading='Why we decided to create Build Your DXP'
							plus
							cross={ImgPlus}
							style={{ padding: '40px 40px 74px 40px' }}
						/>
						<Card
							text='August 27, 2020'
							portfolio={Post4}
							heading='Why we decided to create Build Your DXP'
							plus
							cross={ImgPlus}
							style={{ padding: '40px 40px 74px 40px' }}
						/>
						<Card
							text='August 27, 2020'
							portfolio={Post2}
							heading='Why we decided to create Build Your DXP'
							plus
							cross={ImgPlus}
							style={{ padding: '40px 40px 74px 40px' }}
						/>
						<Card
							text='August 27, 2020'
							portfolio={Post1}
							heading='Why we decided to create Build Your DXP'
							plus
							cross={ImgPlus}
							style={{ padding: '40px 40px 74px 40px' }}
						/>
					</CardWrap>
					<ButtonWrap>
						<Button style={{ marginRight: '20px' }} btnUrl={LeftArrow} alt='' />
						<Button btnUrl={RightArrow} alt='' />
					</ButtonWrap>
				</Blog>
			</PurpleWrap>
			<FooterService className='container'>
				<ServiceWrap>
					<DoubleShape src={FooterImg1} />
					<Circle src={FooterImg3} />
					<ServiceTextWrap>
						<Letter src={FooterImg2} />
						<ServiceTitle>Like our service? Subscribe us</ServiceTitle>
						<ServiceText>
							As a app web crawler expert, I help organizations adjust to the
							expanding significance of internet promoting.
						</ServiceText>
						<SubscribeWrap>
							<Email type='email' placeholder='Enter your email' />
							<Subscribe type='submit' value='Subscribe' />
						</SubscribeWrap>
					</ServiceTextWrap>
				</ServiceWrap>
			</FooterService>
			<MainFooter className='container'>
				<FooterCard>
					<Logo src={LogoFooter} />
					<FooterText>
						Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at
						placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies
						fringilla massa.
					</FooterText>
				</FooterCard>
				<FooterCard>
					<FooterHeading>Company</FooterHeading>
					<FooterLink>About us</FooterLink>
					<FooterLink>Contact us</FooterLink>
					<FooterLink>Careers</FooterLink>
					<FooterLink>Support</FooterLink>
				</FooterCard>
				<FooterCard>
					<FooterLink>FAQ</FooterLink>
					<FooterLink>Terms</FooterLink>
					<FooterLink>Privacy</FooterLink>
					<FooterLink>Blog</FooterLink>
				</FooterCard>
				<FooterCard>
					<FooterHeading>Contact</FooterHeading>
					<FooterLink>Phone: +1 605 722 2032</FooterLink>
					<FooterLink>Email: example@mail.com </FooterLink>
					<FooterLink>
						Address: Charlotte, North Carolina, United States
					</FooterLink>
				</FooterCard>
				<FooterLine />
				<IconWrap>
					<SocialIcon>
						<Icon src={Facebook} />
						<Icon src={Twitter} />
						<Icon src={Youtube} />
						<Icon src={Instagram} />
					</SocialIcon>
					<ServiceText>© 2020 — All Rights Reserved</ServiceText>
				</IconWrap>
			</MainFooter>
		</React.Fragment>
	);
};
export default Homepage;
