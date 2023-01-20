import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Container = styled.div`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  .MuiBox-root {
    border-bottom: none;
  }
  .MuiTabs-indicator {
    background-color: #7950f2 !important;
  }
  .Mui-selected {
    color: #7950f2 !important;
    text-transform: capitalize;
  }
  .MuiTab-root {
    text-transform: capitalize;
    font-family: "Open Sans";
    color: #636363;
  }
`;

const SpanItem = styled.div`
  width: 36px;
  height: 36px;
  background: #e7e7ff;
`;

const Card = styled.div`
  width: 301px;
  height: 208px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PublishedBtn = styled.button`
  border: none;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;

  background: #e7e7ff;
  border-radius: 5px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* identical to box height */
  font-feature-settings: "tnum" on, "lnum" on;

  color: #7950f2;
`;

const Morebtn = styled.button`
  background: #fafafa;
  outline: none;
  float: right;
  /* Grey */
  border: 0.25px solid #a0a3bd;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 12px;
`;

const Title = styled.h6`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: left;
  color: #232360;
`;

const Branding = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 8px;
  background: #f8fafb;

  /* Grey */
  border: 0.25px solid #a0a3bd;
  border-radius: 5px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  width: 53px;
  height: 27px;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */
  font-feature-settings: "tnum" on, "lnum" on;

  /* Grey */
  color: #a0a3bd;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Communication = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background: #f8fafb;

  /* Grey */
  border: 0.25px solid #a0a3bd;
  border-radius: 5px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  width: 100%;
  height: 27px;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */
  font-feature-settings: "tnum" on, "lnum" on;

  /* Grey */
  color: #a0a3bd;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  /* identical to box height */

  /* Grey */
  color: #a0a3bd;
  img {
    margin-right: 10px;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  float: right;

  /* identical to box height */

  /* Grey */
  color: #a0a3bd;
  img {
    margin-right: 10px;
  }
  white-space: nowrap;
`;

export default function SingleTab() {
  return (
    <Grid container spacing={2}>
      <Grid item md={3} lg={3}>
        <Card>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={6} lg={6}>
              <PublishedBtn>Published</PublishedBtn>
            </Grid>
            <Grid item md={6} lg={6}>
              <Morebtn>
                <MoreHorizIcon style={{ fontSize: "19px" }} />
              </Morebtn>
            </Grid>
          </Grid>
          <Title>Create styleguide foundation</Title>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={3} lg={3}>
              <Branding>Branding</Branding>
            </Grid>
            <Grid item md={3} lg={3}>
              <Branding>Branding</Branding>
            </Grid>
            <Grid item md={6} lg={6}>
              <Communication>Communication</Communication>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={5} lg={5}>
              <Name>
                <img src="./profile.svg" alt="" />
                Akshitha
              </Name>
            </Grid>
            <Grid item md={7} lg={7}>
              <Date>
                <img src="./clock.svg" alt="" />
                Aug 20, 2021 , 10:15 Nov
              </Date>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
