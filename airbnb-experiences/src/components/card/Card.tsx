import starImg from "../../assets/images/star.png";
import Chip from "@mui/material/Chip";
import "../../App.css";
import * as StyledUtils from "../../styles/utils.styled-components";
import * as Styled from "./card.styled-components";

type Props = {
  id: number | string;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
};

export const Card = (props: Props) => {
  const {
    title,
    price,
    coverImg,
    stats: { rating, reviewCount },
    location,
    openSpots,
  } = props;

  return (
    <Styled.Wrapper>
      <Styled.CardTop>
        <img src={`src/assets/images/${coverImg}`} className="card__img"></img>
        {openSpots === 0 ? (
          <Chip
            label="SOLD OUT"
            style={{
              position: "absolute",
              left: "5px",
              top: "5px",
              backgroundColor: "#FFFFFF",
            }}
          />
        ) : (
          location === "Online" && (
            <Chip
              label="ONLINE"
              style={{
                position: "absolute",
                left: "5px",
                top: "5px",
                backgroundColor: "#FFFFFF",
              }}
            />
          )
        )}
      </Styled.CardTop>
      <StyledUtils.Space $value={0.6} />
      <Styled.CardBottom>
        <Styled.CardBottomBanner>
          <img src={starImg} width={20} height={20} />
          <p>{rating}</p>
          <p>({reviewCount})</p>
          <p>{location}</p>
        </Styled.CardBottomBanner>
        <StyledUtils.Space $value={0.6} />
        <Styled.Title>{title}</Styled.Title>
        <p>
          <b>From ${price}</b> / person
        </p>
      </Styled.CardBottom>
    </Styled.Wrapper>
  );
};
