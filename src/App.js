import React, { useState } from "react";
import { Container } from "@mui/material"; // Updated import
import useProjectsStore from "./useProjectsStore";
import TabsComponent from "./components/TabsComponent";
import ProjectListComponent from "./components/ProjectListComponent";
import Header from "./components/HeaderComponent";

const App = () => {
  const { projects, handleStatusChange } = useProjectsStore();
  const [selectedTab, setSelectedTab] = useState(0);

  const counts = [
    projects.length,
    projects.filter((project) => project.status === "Matched").length,
    projects.filter((project) => project.status === "Submitted").length,
    projects.filter((project) => project.status === "Closed").length,
    projects.filter((project) => project.status === "Rejected").length,
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      <Header />
      {/* <TabsComponent
        selectedTab={selectedTab}
        handleTabChange={handleTabChange}
        counts={counts}
      />
      <ProjectListComponent
        projects={projects}
        selectedTab={selectedTab}
        handleStatusChange={handleStatusChange}
      /> */}
    </Container>
  );
};

export default App;
