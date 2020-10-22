import React from 'react';
import { Btn } from './style';
const Button = (props: any) => {
	console.log(props);

	const { text, variant } = props;

	return (
		<Btn
			style={{ backgroundColor: variant ? 'red' : 'blue' }}
			className={variant ? 'klasa1' : 'klasa2'}>
			{text}
		</Btn>
	);
};

export default Button;
