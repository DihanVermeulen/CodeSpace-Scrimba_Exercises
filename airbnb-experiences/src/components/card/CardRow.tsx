import * as Styled from "./card-row.styled-components";
import { Card } from "./Card";

type Data = {
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

type Props = {
  data: Data[];
};

export const CardRow = (props: Props) => {
  const { data } = props;
  return (
    <Styled.Wrapper>
      {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Styled.Wrapper>
  );
};
