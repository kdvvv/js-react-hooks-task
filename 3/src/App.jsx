import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';
import {ThemeConsumer} from "react-bootstrap/ThemeProvider";

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

const App = () => {

  let [theme, setTheme] = React.useState(themes[0]);

  return <ThemeContext.Provider value={{themes, theme, setTheme}}>
    <Tabs>
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
    </Tabs>
    <ThemeSwitcher />
  </ThemeContext.Provider>
};

export default App;
