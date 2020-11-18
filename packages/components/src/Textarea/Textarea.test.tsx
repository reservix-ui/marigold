import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@marigold/system';
import { Textarea } from '@marigold/components';

const theme = {
  form: {
    textarea: {
      fontFamily: 'Inter Regular',
    },
    textarea2: {
      fontFamily: 'Roboto',
    },
  },
};

test('supports default variant and themeSection', () => {
  render(
    <ThemeProvider theme={theme}>
      <Textarea title="textarea" />
    </ThemeProvider>
  );
  const textarea = screen.getByTitle(/textarea/);

  expect(textarea).toHaveStyle(`font-family: Inter Regular`);
});

test('accepts other variant than default', () => {
  render(
    <ThemeProvider theme={theme}>
      <Textarea variant="textarea2" title="textarea" />
    </ThemeProvider>
  );
  const textarea = screen.getByTitle(/textarea/);

  expect(textarea).toHaveStyle(`font-family: Roboto`);
});

test('renders correct HTML element', () => {
  render(
    <ThemeProvider theme={theme}>
      <Textarea title="textarea" />
    </ThemeProvider>
  );
  const textarea = screen.getByTitle(/textarea/);

  expect(textarea instanceof HTMLTextAreaElement).toBeTruthy();
});
