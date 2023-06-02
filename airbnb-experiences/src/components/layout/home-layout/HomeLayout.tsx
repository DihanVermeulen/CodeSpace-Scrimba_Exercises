import heroSectionImageSmall from "../../assets/hero-section-small.png";
import heroSectionImageLarge from "../../assets/hero-section-large.png";
import { CardRow } from "../../CardRow";
import data from "../../../data";
import * as StyledUtils from "../../../styles/utils.styled-components";
import * as Styled from "./home-layout.styled-components";

const styles = {
  centerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontWeight: 300,
    fontSize: "16px",
  },
  heading: {
    fontWeight: 600,
    fontSize: "32px",
  },
};

export const HomeLayout = () => {
  return (
    <Styled.Wrapper>
      <Styled.CenterContentSection>
        <picture style={styles.centerContent}>
          <source media="(min-width:650px)" srcSet={heroSectionImageLarge} />
          <img
            src={heroSectionImageSmall}
            alt="Flowers"
            style={{ width: "90%" }}
          />
        </picture>
      </Styled.CenterContentSection>
      <StyledUtils.Space $value={1} />
      <section style={{ padding: "2rem" }}>
        <h1 style={styles.heading}>Online Experiences</h1>
        <p style={styles.description}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
      <StyledUtils.Space $value={1} />
      <CardRow data={data} />
    </Styled.Wrapper>
  );
};
