import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import TabsComponent from "./TabsComponent";
import useProjectsStore from "../useProjectsStore";
import ProjectListComponent from "./ProjectListComponent";
import { Typography } from "@mui/material";

export default function UnstyledTabsIntroduction() {
  const { projects, handleStatusChange } = useProjectsStore();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const counts = [
    projects.length,
    projects.filter((project) => project.status === "Matched").length,
    projects.filter((project) => project.status === "Submitted").length,
    projects.filter((project) => project.status === "Closed").length,
    projects.filter((project) => project.status === "Rejected").length,
  ];
  const totalSubmittedAndClosed = counts[2] + counts[3]; // Calculate total

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Projects</Tab>
        <Tab value={1}>Profile</Tab>
        <Tab value={2}>Activity</Tab>
      </TabsList>
      <Typography variant='h3' align='left' gutterBottom>
        <span style={{ color: "#00e676" }}>{totalSubmittedAndClosed}</span>{" "}
        projects shared with you!
      </Typography>
      <TabPanel value={0}>
        <TabsComponent
          selectedTab={selectedTab}
          handleTabChange={handleTabChange}
          counts={counts}
        />
        <ProjectListComponent
          projects={projects}
          selectedTab={selectedTab}
          handleStatusChange={handleStatusChange}
        />
      </TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
      <TabPanel value={2}>Activity page</TabPanel>
    </Tabs>
  );
}

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #424242;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100px;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #00c853;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #00c853;
  }

  &.${tabClasses.selected} {
    background-color: #00e676;
    color: #424242;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    width: auto;
    padding: 8px 10px;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  width: 100%;
  min-width: 100%;
  background-color: ${"#ffff"};
  border-radius: 12px;
  outline: 1px solid #00c853;
  margin-top : 30px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? "#fff" : "#fff"};
  
  @media (max-width: 600px) {
    min-width: auto;
  }
  `
);
