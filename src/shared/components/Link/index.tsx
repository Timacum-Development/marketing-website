import React from 'react';
import { LinkFirst, LinkSecond, LinkThird } from './style';

const MainLink = (props: any) => {
	console.log(props);

	const {
		text,
		full,
		onClick,
		style,
		icon,
		logoUrl,
		plus,
		plusUrl,
		className,
	} = props;
	return (
		<React.Fragment>
			{!icon && !plus ? (
				<LinkFirst
					style={style}
					// style={{ backgroundColor: variant ? 'red' : 'green' }}
					// className={variant === 'outline' ? 'klasa1' : 'klasa2'}
					// className={outline ? 'klasa1' : 'klasa2'}
					className={full ? 'full' : className}
					onClick={onClick}
					href='#'>
					{text}
				</LinkFirst>
			) : !plus && !plusUrl ? (
				<LinkSecond
					className={className}
					style={style}
					onClick={onClick}
					href='#'>
					<img src={logoUrl} alt='' />
				</LinkSecond>
			) : (
				<LinkThird onClick={onClick} href='#'>
					<img src={plusUrl} alt='img plus'></img>
				</LinkThird>
			)}
		</React.Fragment>
	);
};

export default MainLink;
