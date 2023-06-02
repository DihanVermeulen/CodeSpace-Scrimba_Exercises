import styled from "styled-components";
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

const Wrapper = styled.section`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 100%;
  padding: 1rem;
`;

export const CardRow = (props: Props) => {
  const { data } = props;
  return (
    <Wrapper>
      {data?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};
