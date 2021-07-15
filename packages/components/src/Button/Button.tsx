import React, { useRef } from 'react';
import { useButton } from 'react-aria';
import { ComponentPropsWithRef } from '@marigold/types';

import { Box, BoxOwnProps } from '../Box';

export type ButtonProps = {
  variant?: string;
} & BoxOwnProps &
  ComponentPropsWithRef<'button'>;

export const Button = ({ variant = 'primary.large', ...props }) => {
  const ref = useRef<any>();
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <Box
      {...props}
      {...buttonProps}
      as="button"
      variant={`button.${variant}`}
      ref={ref}
    >
      <Box as="span" display="inline-flex" alignItems="center">
        {children}
      </Box>
    </Box>
  );
};
