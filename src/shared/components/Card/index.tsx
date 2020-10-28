import React from 'react';
import { MainCard } from './style';
import { InsideCard, CardText } from '../../../containers/pages/Homepage/style';
import CardImg from '../CardImage/index';

const Card = (props: any) => {
	console.log(props);

	const { text, heading, url } = props;

	return (
		<MainCard>
			<InsideCard>
				<CardImg imgUrl={url} />
				<CardText>
					<h4>{heading}</h4>
					<p>{text}</p>
				</CardText>
			</InsideCard>
		</MainCard>
	);
};

export default Card;
