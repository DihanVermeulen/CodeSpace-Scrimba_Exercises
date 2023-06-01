import styled from "styled-components";
import headerLogo from "../assets/header-logo.png";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-shadow: 0 0 3px 7px rgba(0, 0, 0, 0.1);
`;

export const Header = () => {
  return (
    <Wrapper>
      <img src={headerLogo} width={80} />
    </Wrapper>
  );
};
