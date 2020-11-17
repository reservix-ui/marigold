import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@marigold/system';
import { Badge } from '@marigold/components';

const theme = {
  content: {
    badge: {
      borderRadius: '8px',
    },
  },
};

test('supports default variant and themeSection', () => {
  render(
    <ThemeProvider theme={theme}>
      <Badge title="badge" />
    </ThemeProvider>
  );
  const badge = screen.getByTitle(/badge/);

  expect(badge).toHaveStyle(`border-radius: 8px;`);
});

test('renders correct HTML element', () => {
  render(
    <ThemeProvider theme={theme}>
      <Badge title="badge" />
    </ThemeProvider>
  );
  const badge = screen.getByTitle(/badge/);

  expect(badge instanceof HTMLDivElement).toBeTruthy();
});

test('supports custom borderColor prop', () => {
  render(
    <ThemeProvider theme={theme}>
      <Badge title="badge" borderColor="#000" />
    </ThemeProvider>
  );
  const badge = screen.getByTitle(/badge/);

  expect(badge).toHaveStyle(`border: 1px solid #000`);
});

test('supports custom backgroundColor prop', () => {
  render(
    <ThemeProvider theme={theme}>
      <Badge title="badge" backgroundColor="#1ee" />
    </ThemeProvider>
  );
  const badge = screen.getByTitle(/badge/);

  expect(badge).toHaveStyle(`background: #1ee`);
});
