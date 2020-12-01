import React from 'react';
import { Svg } from '@marigold/components';

export const Truck = ({ className = '', ...props }) => (
  <Svg className={className} {...props}>
    <path d="M19.6364 8.17756H16.7727V4.35938H3.40909C2.35909 4.35938 1.5 5.21847 1.5 6.26847V16.7685H3.40909C3.40909 18.353 4.68818 19.6321 6.27273 19.6321C7.85727 19.6321 9.13636 18.353 9.13636 16.7685H14.8636C14.8636 18.353 16.1427 19.6321 17.7273 19.6321C19.3118 19.6321 20.5909 18.353 20.5909 16.7685H22.5V11.9957L19.6364 8.17756ZM6.27273 18.2003C5.48046 18.2003 4.84091 17.5608 4.84091 16.7685C4.84091 15.9762 5.48046 15.3367 6.27273 15.3367C7.065 15.3367 7.70455 15.9762 7.70455 16.7685C7.70455 17.5608 7.065 18.2003 6.27273 18.2003ZM19.1591 9.60938L21.03 11.9957H16.7727V9.60938H19.1591ZM17.7273 18.2003C16.935 18.2003 16.2955 17.5608 16.2955 16.7685C16.2955 15.9762 16.935 15.3367 17.7273 15.3367C18.5195 15.3367 19.1591 15.9762 19.1591 16.7685C19.1591 17.5608 18.5195 18.2003 17.7273 18.2003Z" />
  </Svg>
);
