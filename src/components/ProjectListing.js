import React from "react";
import { Box, Button, MenuItem, Select } from "@mui/material"; // Updated import

const ProjectListing = ({ project, handleStatusChange }) => {
  return (
    <Box>
      <div>{project.name}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <Select
            value={project.status}
            onChange={(event) =>
              handleStatusChange(project.id, event.target.value)
            }
          >
            <MenuItem value='Matched'>Matched</MenuItem>
            <MenuItem value='Submitted'>Submitted</MenuItem>
            <MenuItem value='Closed'>Closed</MenuItem>
            <MenuItem value='Rejected'>Rejected</MenuItem>
          </Select>
        </div>
        <div>
          <Button variant='contained' size='small' color='primary'>
            View Details
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default ProjectListing;
