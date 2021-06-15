import styled from "@emotion/styled";
import React from "react";
const link =
  "https://cdn.shopify.com/s/files/1/0701/0143/t/9/assets/collection-159831163014-features_4.png?v=1589362799";
const Img = styled.img`
  width: 240px;
  height: 240px;
  max-width: 240px;
  max-height: 240px;
  object-fit: cover;
  border: 2px solid var(--bg-color);
  border-radius: 3px;
  animation: circling-shadow 4s ease-out 0s infinite normal;
`;
const Container = styled.div`
  width: 240px;
  height: 240px;
`;
const Picture = () => {
  return (
    <Container>
      <Img src={link} alt="Smiley face" />
    </Container>
  );
};

export default Picture;
