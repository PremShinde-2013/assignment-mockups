import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";

const ProjectListing = ({ project, handleStatusChange }) => {
  return (
    <Box
      style={{
        border: "1px solid #ccc",
        borderBottom: "3px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        flexBasis: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          className='text-container'
          style={{
            order: window.innerWidth > 768 ? "1" : "2",
            justifyContent: "start",
            textAlign: "start", // Align text to start
          }}
        >
          <Typography
            variant='h6'
            color='initial'
            style={{
              marginBottom: "8px",
              fontSize: "1rem",
            }}
          >
            Installation expected in <strong>{project.installation}</strong>
          </Typography>
          <Typography
            variant='h6'
            color='initial'
            style={{
              opacity: 0.6,
              fontSize: "1rem",
            }}
          >
            Shared on {project.shared}
          </Typography>

          <Select
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
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
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            flexBasis: "50%",
            marginBottom: "8px",
          }}
        >
          <Typography variant='h5' color='initial' fontWeight='bold'>
            {project.name}
          </Typography>
          <Typography
            variant='h6'
            color='initial'
            fontWeight='bold'
            style={{
              fontSize: "1rem",
            }}
          >
            {project.client}
          </Typography>{" "}
          <Typography variant='h6' color='initial' style={{ fontSize: "1rem" }}>
            {project.Address}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

<style jsx>{`
  @media (max-width: 399px) {
    .text-container {
      text-align: start !important;
    }
  }
`}</style>;

export default ProjectListing;
