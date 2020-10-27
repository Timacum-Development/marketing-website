import React from 'react';
import { MainButton } from './style';

const Button = (props: any) => {
	console.log(props);

	const { btnUrl } = props;

	return <MainButton src={btnUrl}></MainButton>;
};

export default Button;
