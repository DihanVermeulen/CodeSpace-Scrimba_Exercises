import styled from "styled-components";
import heroSectionImageSmall from "../../assets/hero-section-small.png";
import heroSectionImageLarge from "../../assets/hero-section-large.png";

const Wrapper = styled.section`
  padding: 2rem;
`;

const CenterContentSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  margin-bottom: 1rem;
`;

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
    <Wrapper>
      <CenterContentSection>
        <picture style={styles.centerContent}>
          <source media="(min-width:650px)" srcSet={heroSectionImageLarge} />
          <img
            src={heroSectionImageSmall}
            alt="Flowers"
            style={{ width: "90%" }}
          />
        </picture>
      </CenterContentSection>
      <Space />
      <h1 style={styles.heading}>Online Experiences</h1>
      <p style={styles.description}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </Wrapper>
  );
};
