import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px;
  gap: 10px;

  width: 297px !important;
  height: 53px;

  background: #fcfcfd;
  border: 1px solid #e8eff7;
  border-radius: 8px;

  /* Inside auto layout */

  img {
    margin: auto 0;
    display: block;
  }
  float: right;
  margin-right: 15px;
  p {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;

    color: #373b5c;
  }
  h3 {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #373b5c;
  }
`;

const InputContainer = styled.div`
  height: 35px;
  width: 160px;
  position: relative;
  box-sizing: border-box;

  width: 261px;
  height: 51px;

  /* Grey */
  border: 1px solid #a0a3bd;
  border-radius: 10px;
  img {
    position: absolute;
    left: 15px;
    top: 15px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

const FilterIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 54px;
  height: 54px;
  margin-left: 10px;
  background: #e7e7ff;
  border-radius: 10px;
`;
export default function UserContainer() {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item lg={2}>
          <img src="./image 11.svg" />
        </Grid>

        <Grid item lg={8}>
          <p>Welcome back,</p>
          <h3>Akshita Patel</h3>
        </Grid>
        <Grid item lg={2}>
          <img src="./Stroke-1.svg" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}
