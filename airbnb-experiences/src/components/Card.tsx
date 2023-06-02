import styled from "styled-components";
import starImg from "../assets/images/star.png";
import Chip from "@mui/material/Chip";
import "../App.css";
import * as Styled from "../styles/utils.styled-components";

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

const Wrapper = styled.article`
  cursor: pointer;
  border-radius: 10px;
`;

const CardTop = styled.section`
  width: 100%;
  height: 18rem;
  width: 16rem;
  position: relative;
`;

const CardBottomBanner = styled.article`
  display: flex;
  gap: 5px;
`;

const CardBottom = styled.section`
  font-size: 12px;
  padding: 0.3rem;
`;

const Title = styled.h3`
  font-weight: 300;
  color: #222222;
`;

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
    <Wrapper>
      <CardTop>
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
      </CardTop>
      <Styled.Space $value={0.6} />
      <CardBottom>
        <CardBottomBanner>
          <img src={starImg} width={20} height={20} />
          <p>{rating}</p>
          <p>({reviewCount})</p>
          <p>{location}</p>
        </CardBottomBanner>
        <Styled.Space $value={0.6} />
        <Title>{title}</Title>
        <p>
          <b>From ${price}</b> / person
        </p>
      </CardBottom>
    </Wrapper>
  );
};
