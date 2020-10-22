import React from 'react';
import { Navigation, NavigationLink, Logo } from '../general/style';

// Assets
import LogoImg from '../../assets/Group 3.svg';

const Nav = () => {
	return (
		<Navigation>
			<Logo src={LogoImg} />
			<NavigationLink>Home</NavigationLink>
			<NavigationLink>About Us</NavigationLink>
			<NavigationLink>Services</NavigationLink>
			<NavigationLink>Blog</NavigationLink>
			<NavigationLink>Portfolio</NavigationLink>
		</Navigation>
	);
};

export default Nav;
