import React from 'react';
import { ImgCard, PortfolioImg } from './style';

const CardImg = (props: any) => {
	console.log(props);

	const { imgUrl, portfolioUrl, portfolio } = props;

	return (
		<React.Fragment>
			{!portfolio && !portfolioUrl ? (
				<ImgCard src={imgUrl}></ImgCard>
			) : (
				<PortfolioImg src={portfolioUrl}></PortfolioImg>
			)}
		</React.Fragment>
	);
};

export default CardImg;
