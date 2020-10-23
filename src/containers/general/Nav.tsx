import React from 'react';
import { Navigation, NavigationLink, Logo } from '../general/style';

// Assets
import LogoImg from '../../assets/logo.svg';

const Nav = () => {
	return (
		<Navigation>
			<NavigationLink href='#'>
				<Logo src={LogoImg} />
			</NavigationLink>
			<NavigationLink href='#'>Home</NavigationLink>
			<NavigationLink href='#'>About Us</NavigationLink>
			<NavigationLink href='#'>Services</NavigationLink>
			<NavigationLink href='#'>Blog</NavigationLink>
			<NavigationLink href='#'>Portfolio</NavigationLink>
		</Navigation>
	);
};

export default Nav;
