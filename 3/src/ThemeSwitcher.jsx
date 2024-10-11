import React, { useContext } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

const ThemeSwitcher = () => {
  // BEGIN (write your solution here)
  const { themes, theme, setTheme } = React.useContext(ThemeContext)
  return (
    <ButtonGroup className="mt-2">
      {themes.map((_theme) => (
        <ToggleButton
          key={_theme.id}
          id={`${_theme.id}`}
          type="radio"
          name="radio"
          value={_theme.name}
          checked={_theme.id === theme.id}
          onClick={() => setTheme(_theme)}
        >
          {_theme.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
  // END
};

export default ThemeSwitcher;
