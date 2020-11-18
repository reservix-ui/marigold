import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@marigold/system';
import { Slider } from '@marigold/components';

const theme = {
  form: {
    slider: {
      fontFamily: 'Oswald Regular',
    },
    range: {
      fontFamily: 'Inter',
    },
  },
};

test('supports default variant and themeSection', () => {
  render(
    <ThemeProvider theme={theme}>
      <Slider title="slider" />
    </ThemeProvider>
  );
  const slider = screen.getByTitle(/slider/);

  expect(slider).toHaveStyle(`font-family: Oswald Regular`);
});

test('accepts other variant than default', () => {
  render(
    <ThemeProvider theme={theme}>
      <Slider variant="range" title="slider" />
    </ThemeProvider>
  );
  const slider = screen.getByTitle(/slider/);

  expect(slider).toHaveStyle(`font-family: Inter`);
});

test('renders <input> element by default', () => {
  render(
    <ThemeProvider theme={theme}>
      <Slider title="slider" />
    </ThemeProvider>
  );
  const slider = screen.getByTitle(/slider/);

  expect(slider instanceof HTMLInputElement).toBeTruthy();
});
