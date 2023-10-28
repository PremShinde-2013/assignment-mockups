import React from "react";
import { Tabs, Tab, styled } from "@mui/material";

const TabsList = styled("div")(
  ({ theme }) => `
    border: 1px solid #00e676; /* Add green border */
    border-radius: 12px;
    margin: 10px; /* Add margin */
  `
);

const CustomTab = styled(Tab)`
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

  &.Mui-selected {
    background-color: #00e676;
    color: #424242;
    text-decoration: none;
    underline: none;
  }

  &.Mui-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding: 8px 10px;
    width: auto;
  }
`;

const TabsComponent = ({ selectedTab, handleTabChange, counts }) => {
  const labels = ["All", "Matched", "Submitted", "Closed", "Rejected"];

  return (
    <TabsList>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
      >
        {labels.map((label, index) => (
          <CustomTab label={`${label} (${counts[index]})`} key={index} />
        ))}
      </Tabs>
    </TabsList>
  );
};

export default TabsComponent;
