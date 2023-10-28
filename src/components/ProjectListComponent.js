import React from "react";
import ProjectListing from "./ProjectListing";

const ProjectListComponent = ({
  projects,
  selectedTab,
  handleStatusChange,
}) => {
  const getStatusFilter = () => {
    if (selectedTab === 0) return () => true;
    const status = ["", "Matched", "Submitted", "Closed", "Rejected"][
      selectedTab
    ];
    return (project) => project.status === status;
  };

  const filteredProjects = projects.filter(getStatusFilter());

  return (
    <div>
      {filteredProjects.map((project) => (
        <ProjectListing
          key={project.id}
          project={project}
          handleStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default ProjectListComponent;
