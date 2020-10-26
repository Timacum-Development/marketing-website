import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderWrap } from '../Header/style';
import { MainLink } from '../../../shared/components';

// Assets
import Nav from '../Nav';

const Header = () => {
	return (
		<HeaderWrap className='container'>
			<nav>
				<Nav />
			</nav>
			<MainLink text='Contact us' style={{ padding: '18px 40px 19px 40px' }} />
		</HeaderWrap>
	);
};

export default Header;
