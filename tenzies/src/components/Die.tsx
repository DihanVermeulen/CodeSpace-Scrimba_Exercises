import { DieProps } from "../@types/dice";
import styled from "styled-components";
import { DOT_POSITION_MATRIX } from "../constants/constants";

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 5px;
  border-radius: 10px;
  background-color: #b744b8;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: inline-block;
  margin: 5px;
  cursor: pointer;
`;

const Dot = styled.div`
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #000000;
  position: absolute;
`;

const Die = (props: DieProps) => {
  const { isHolding, value, id, holdDice } = props;

  const createDots = () => {
    const dots = [];
    for (const dotPosition of DOT_POSITION_MATRIX[value]) {
      dots.push(
        <Dot
          key={dotPosition}
          style={{
            top: `${dotPosition[0]}%`,
            left: `${dotPosition[1]}%`,
            transform: `translateX(-${dotPosition[1]}%) translateY(-${dotPosition[0]}%)`,
          }}
        ></Dot>
      );
    }
    return dots;
  };

  return (
    <Wrapper
      onClick={holdDice}
      style={{ backgroundColor: isHolding ? "#ADB9E3" : "" }}
    >
      {createDots()}
    </Wrapper>
  );
};

export default Die;
