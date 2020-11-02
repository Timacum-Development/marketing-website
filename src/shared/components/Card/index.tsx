import React from "react";
import { MainCard, SecondCard, ThirdCard } from "./style";
import {
  InsideCard,
  CardText,
  SmallTxt,
  Portfolio,
} from "../../../containers/pages/Homepage/style";
import CardImg from "../CardImage/index";
import MainLink from "../Link/index";

const Card = (props: any) => {
  console.log("PROPS" + props);

  const { text, heading, url, plus, cross, project, portfolio } = props;

  return (
    <React.Fragment>
      {url && plus ? (
        <MainCard>
          <InsideCard>
            <CardImg imgUrl={url} />
            <CardText>
              <h4>{heading}</h4>
              <SmallTxt>{text}</SmallTxt>
            </CardText>
          </InsideCard>
          <MainLink plusUrl={cross} plus />
        </MainCard>
      ) : !plus && project ? (
        <SecondCard>
          <CardImg portfolioUrl={portfolio} />
          <CardText>
            <h4>{heading}</h4>
            <SmallTxt>{text}</SmallTxt>
          </CardText>
        </SecondCard>
      ) : (
        <ThirdCard>
          <CardImg portfolioUrl={portfolio} />
          <CardText>
            <SmallTxt>{text}</SmallTxt>
            <h4>{heading}</h4>
          </CardText>
          <MainLink plusUrl={cross} plus />
        </ThirdCard>
      )}
    </React.Fragment>
  );
};

export default Card;
