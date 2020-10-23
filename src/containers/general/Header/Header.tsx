import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderWrap } from '../Header/style';
import { MainLink } from '../../../shared/components';

// Assets
import Nav from '../Nav';

const Header = () => {
	return (
		<HeaderWrap>
			<nav>
				<Nav />
			</nav>
			<MainLink
				text='Contact us'
				outline
				style={{ padding: '18px 0 19px 0', borderRadius: '40px' }}
			/>
		</HeaderWrap>
	);
};

export default Header;
