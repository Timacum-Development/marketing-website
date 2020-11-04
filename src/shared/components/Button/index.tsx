import React from 'react';
import { MainButton } from './style';

const Button = (props: any) => {
	console.log(props);

	const { btnUrl, style, className } = props;

	return (
		<MainButton className={className} style={style} src={btnUrl}></MainButton>
	);
};

export default Button;
