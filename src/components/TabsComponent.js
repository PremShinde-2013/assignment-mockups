import React from "react";
import { Tabs, Tab, styled } from "@mui/material"; // Updated import

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
`;

const TabsList = styled("div")(
  ({ theme }) => `
    width:100%;
    min-width: 400px;
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
  `
);

const TabsComponent = ({ selectedTab, handleTabChange, counts }) => {
  const labels = ["All", "Matched", "Submitted", "Closed", "Rejected"];

  return (
    <TabsList>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        {labels.map((label, index) => (
          <CustomTab label={`${label} (${counts[index]})`} key={index} />
        ))}
      </Tabs>
    </TabsList>
  );
};

export default TabsComponent;
