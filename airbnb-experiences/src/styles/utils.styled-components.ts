import styled from "styled-components";

export const Space = styled.div<{ $value: number }>`
  margin-bottom: ${(props) => props.$value}rem;
`;
