import * as React from 'react';
import { useThemeSwitch } from './ThemeSwitch';

const base = {
  text: {
    body: {
      color: 'text',
    },
  },
};

export const themes = {
  blue: {
    ...base,
    colors: {
      text: '#0074d9',
    },
  },
  olive: {
    ...base,
    colors: {
      text: '#3d9970',
    },
  },
  maroon: {
    ...base,
    colors: {
      text: '#85144b',
    },
  },
};

export const ThemeSelect: React.FC = () => {
  const { current, themes, setTheme } = useThemeSwitch();

  return (
    <>
      <label htmlFor="theme-select">Select a theme:</label>
      <select
        id="theme-select"
        value={current}
        onChange={e => setTheme(e.target.value)}
      >
        <option value={undefined}>none</option>
        {Object.keys(themes).map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
