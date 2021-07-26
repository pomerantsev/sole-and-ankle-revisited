import { createGlobalStyle } from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-white: ${COLORS.white};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};

    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-bold: ${WEIGHTS.bold};
  }
`;

export default GlobalStyles;
