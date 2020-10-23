import React from 'react';
import { LinkFirst, LinkSecond } from './style';

const MainLink = (props: any) => {
	console.log(props);

	const { text, outline, onClick, style, icon } = props;

	return (
		<React.Fragment>
			{!icon ? (
				<LinkFirst
					style={style}
					// style={{ backgroundColor: variant ? 'red' : 'green' }}
					// className={variant === 'outline' ? 'klasa1' : 'klasa2'}
					// className={outline ? 'klasa1' : 'klasa2'}
					className={outline && 'klasa1'}
					onClick={onClick}>
					{text}
				</LinkFirst>
			) : (
				<LinkSecond style={style} onClick={onClick}>
					{text}
				</LinkSecond>
			)}
		</React.Fragment>
	);
};

export default MainLink;
