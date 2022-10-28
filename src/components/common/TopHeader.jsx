import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Home, Send, Person } from '@material-ui/icons';
import styled from 'styled-components';

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const TopHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          className="flex"
          value={value}
          onChange={handleChange}
          aria-label="Main Tabs"
        >
          <Tab label="Home" icon={<Home />} />
          <Tab label="Send" icon={<Send />} />
          <Tab label="Profile" icon={<Person />} />
        </Tabs>
      </AppBar>
    </>
  );
};

export default TopHeader;
