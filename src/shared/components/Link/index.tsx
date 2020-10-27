import React from 'react';
import { LinkFirst, LinkSecond } from './style';

const MainLink = (props: any) => {
	console.log(props);

	const { text, full, onClick, style, icon, logoUrl } = props;

	return (
		<React.Fragment>
			{!icon ? (
				<LinkFirst
					style={style}
					// style={{ backgroundColor: variant ? 'red' : 'green' }}
					// className={variant === 'outline' ? 'klasa1' : 'klasa2'}
					// className={outline ? 'klasa1' : 'klasa2'}
					className={full ? 'full' : ''}
					onClick={onClick}
					href='#'>
					{text}
				</LinkFirst>
			) : (
				<LinkSecond style={style} onClick={onClick} href='#'>
					<img src={logoUrl} alt='' />
				</LinkSecond>
			)}
		</React.Fragment>
	);
};

export default MainLink;
