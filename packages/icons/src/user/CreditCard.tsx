import React from 'react';
import { Svg } from '@marigold/components';

export const CreditCard = ({ className = '', ...props }) => (
  <Svg className={className} {...props}>
    <path d="M2.79867 12.6224H14.5914V13.7706H2.79867V12.6224Z" />
    <path d="M2.79867 14.9109H7.8299V16.0591H2.79867V14.9109Z" />
    <path d="M1.83388 6.12415H15.6438C16.6326 6.12415 17.4379 6.92946 17.4379 7.91817V18.3235C17.4379 19.3122 16.6326 20.1175 15.6438 20.1175H1.83388C0.845179 20.1175 0.0398636 19.3122 0.0398636 18.3235V7.91817C0.0398636 6.92946 0.845179 6.12415 1.83388 6.12415ZM2.14485 18.0205H15.3409V8.22115H2.14485V18.0205Z" />
    <path d="M22.3655 3.85175H8.56346C7.68638 3.85175 6.96878 4.56935 6.96878 5.44643V5.76537H8.66712V5.55008H22.2618V7.24842H17.6771C17.7488 7.45573 17.7967 7.67899 17.7967 7.91819V10.6451H22.2618V15.7401H17.7967V17.4385H22.3655C23.2425 17.4385 23.9601 16.7208 23.9601 15.8438V5.44643C23.9601 4.56935 23.2425 3.85175 22.3655 3.85175Z" />
  </Svg>
);
