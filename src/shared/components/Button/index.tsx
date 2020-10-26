import React from 'react';
import { MainButton } from './style';

const Button = (props: any) => {
	console.log(props);

	const { img } = props;

	return (
		<React.Fragment>
			<MainButton>{img}</MainButton>
		</React.Fragment>
	);
};

export default Button;
