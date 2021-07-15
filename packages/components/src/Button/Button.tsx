import React, { forwardRef, RefObject } from 'react';
import { useButton } from 'react-aria';
import {
  PolymorphicComponentWithRef,
  PolymorphicPropsWithRef,
} from '@marigold/types';

import { Box, BoxOwnProps } from '../Box';

export type ButtonProps = PolymorphicPropsWithRef<BoxOwnProps, 'button'>;

export const Button: PolymorphicComponentWithRef<BoxOwnProps, 'button'> =
  forwardRef(
    (
      {
        as = 'button',
        variant = 'primary.large',
        children,
        className,
        ...props
      },
      ref
    ) => {
      const { buttonProps } = useButton(
        {
          ...props,
          elementType: typeof as === 'string' ? as : 'span',
        },
        ref as RefObject<HTMLSpanElement>
      );

      return (
        <Box
          {...props}
          {...buttonProps}
          as={as}
          variant={`button.${variant}`}
          className={className}
          ref={ref}
        >
          <Box as="span" display="inline-flex" alignItems="center">
            {children}
          </Box>
        </Box>
      );
    }
  );
