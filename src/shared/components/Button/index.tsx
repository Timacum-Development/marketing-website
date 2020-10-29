import React from 'react';
import { MainButton } from './style';

const Button = (props: any) => {
	console.log(props);

	const { btnUrl, style } = props;

	return <MainButton style={style} src={btnUrl}></MainButton>;
};

export default Button;
