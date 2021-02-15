import React from 'react';
import { render, screen } from '@testing-library/react';
import { MarigoldProvider } from '@marigold/system';
import { Menu, MenuItem } from '@marigold/components';

const theme = {
  content: {
    menu: {
      padding: '4px',
    },
    options: {
      padding: '8px',
    },
  },
};

test('supports default variant and themeSection', () => {
  render(
    <MarigoldProvider theme={theme}>
      <Menu title="menu" onClick={() => {}}>
        <MenuItem href="#">Home</MenuItem>
      </Menu>
    </MarigoldProvider>
  );
  const menu = screen.getByTitle(/menu/);

  expect(menu).toHaveStyle(`padding: 4px`);
});

test('accepts other variant than default', () => {
  render(
    <MarigoldProvider theme={theme}>
      <Menu variant="options" title="menu" onClick={() => {}}>
        <MenuItem href="#">Home</MenuItem>
      </Menu>
    </MarigoldProvider>
  );
  const menu = screen.getByTitle(/menu/);

  expect(menu).toHaveStyle(`padding: 8px`);
});

test('supports show prop', () => {
  render(
    <MarigoldProvider theme={theme}>
      <Menu show={true} title="menu" onClick={() => {}}>
        <MenuItem href="#">Home</MenuItem>
      </Menu>
    </MarigoldProvider>
  );
  const menu = screen.getByTitle(/menu/);

  expect(menu).toHaveStyle(`display: block`);
});

test('renders correct HTML element', () => {
  render(
    <MarigoldProvider theme={theme}>
      <Menu title="menu" onClick={() => {}}>
        <MenuItem href="#">Home</MenuItem>
      </Menu>
    </MarigoldProvider>
  );
  const menu = screen.getByTitle(/menu/);

  expect(menu instanceof HTMLDivElement).toBeTruthy();
});

test('accepts custom styles prop className', () => {
  render(
    <Menu title="menu" onClick={() => {}} className="custom-class-name">
      <MenuItem href="#">Home</MenuItem>
    </Menu>
  );
  const menu = screen.getByTitle(/menu/);

  expect(menu.className).toMatch('custom-class-name');
});
