import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrap } from '../Header/style';
import { Button } from '../../../shared/components';
// Assets
import Nav from '../Nav';

const Header = () => {
	return (
		<HeaderWrap>
			<nav>
				<Nav />
			</nav>
			<Button text='Contact us' variant='outline' />
			<Button text='Contact us 2' />
		</HeaderWrap>
	);
};

export default Header;
