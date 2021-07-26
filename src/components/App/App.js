import React from 'react';
import styled from 'styled-components/macro';

import GlobalStyles from './GlobalStyles';

import { QUERIES } from '../../constants';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>

      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndDown} {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default App;
