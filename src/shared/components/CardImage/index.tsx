import React from 'react';
import { ImgCard } from './style';

const CardImg = (props: any) => {
	console.log(props);

	const { imgUrl } = props;

	return <ImgCard src={imgUrl}></ImgCard>;
};

export default CardImg;
