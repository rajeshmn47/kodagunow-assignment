import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Images from "../components/imagecontainer";
import BasicTabs from "../components/tabs";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import UserContainer from "../components/usercontainer";

const inter = Inter({ subsets: ["latin"] });

const Container = styled(Grid)`
  .MuiBox-root {
    margin-bottom: 30px;
  }
`;

const RightBar = styled(Grid)`
  background-color: #f9f8ff;
`;

const TopBar = styled.div`
  background-color: #ffffff;
  height: 92px;
  margin-bottom: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Talker = styled.div`
  display: flex;
  align-items: center;
  margin: 80px 0;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  h6 {
    font-family: "Urbanist";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    /* identical to box height */

    color: #000000;
  }
`;
export default function Home() {
  return (
    <>
      <Container container spacing={2}>
        <Grid item xs={4} md={3} lg={3}>
          <Sidebar />
        </Grid>
        <RightBar item xs={4} md={9} lg={9}>
          <TopBar>
            <UserContainer />
          </TopBar>
          <Images />
          <Talker>
            <img src="./serious.png" />
            <h6>Akshita’s Task</h6>
          </Talker>
          <BasicTabs />
        </RightBar>
      </Container>
    </>
  );
}
