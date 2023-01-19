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
import SingleTab from "./singletab";
import BlueSingleTab from "./bluesingletab";
import Filter from "./filter";

const Container = styled.div`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  .MuiBox-root {
    border-bottom: none;
    padding: 0;
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
  width: 331px;
  height: 208px;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const PublishedBtn = styled.button`
  border: none;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;

  background: #e4fff8;
  border-radius: 5px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  /* identical to box height */
  font-feature-settings: "tnum" on, "lnum" on;

  color: #0dad82;
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
  width: 73px;
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
  padding: 10px 8px;
  background: #f8fafb;

  /* Grey */
  border: 0.25px solid #a0a3bd;
  border-radius: 5px;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 600;
  width: 93px;
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

  /* identical to box height */

  /* Grey */
  color: #a0a3bd;
  img {
    margin-right: 10px;
  }
  white-space: nowrap;
`;

const FilterContainer = styled.div`
  float: right;
  margin-right: 15px;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{}}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid container>
            <Grid item md={7} lg={7} alignItems="center">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All 5" Icon={<PhoneIcon />} {...a11yProps(0)}>
                  uio
                </Tab>
                <Tab label="Open 5" {...a11yProps(1)} />
                <Tab label="Submitted 5" {...a11yProps(2)} />
                <Tab label="Approved 0" {...a11yProps(0)} />
                <Tab label="Published 6" {...a11yProps(1)} />
                <Tab label="Rejected 0" {...a11yProps(2)} />
              </Tabs>
            </Grid>
            <Grid item md={5} lg={5}>
              <FilterContainer>
                <Filter />
              </FilterContainer>
            </Grid>
          </Grid>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container spacing={2}>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <BlueSingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
            <Grid item md={6} lg={6}>
              <SingleTab />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Container>
  );
}
