import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 15px;
  box-sizing: border-box;
`;

const ImageContainer = styled(Grid)`
  h3 {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */

    color: #000000;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;

export default function Images() {
  return (
    <Container>
      <Grid container>
        <ImageContainer item md={2} lg={2}>
          <img src="./Ellipse 358.png" alt="" width="400" />
          <h3>Akshitha</h3>
        </ImageContainer>
        <ImageContainer item md={2} lg={2}>
          <img src="./Ellipse 358(1).png" alt="" width="400" />
          <h3>Akshitha</h3>
        </ImageContainer>
        <ImageContainer item md={2} lg={2}>
          <img src="./Ellipse 358(2).png" alt="" width="400" />
          <h3>Akshitha</h3>
        </ImageContainer>
        <ImageContainer item md={2} lg={2}>
          <img src="./Ellipse 358(3).png" alt="" width="400" />
          <h3>Akshitha</h3>
        </ImageContainer>
        <ImageContainer item md={2} lg={2}>
          <img src="./Ellipse 358(4).png" alt="" width="400" />
          <h3>Akshitha</h3>
        </ImageContainer>
      </Grid>
    </Container>
  );
}
