import React, { Fragment } from 'react';
import GlobalStyle from '../styles/base/_base';

import { respond } from '../styles/abstract/_functions';
import { flexCenterCenter } from '../styles/abstract/_mixins';
import styled from 'styled-components';

const Paragraph = styled.div`
  height: 100vh;
  width: 100%;
  color: violet;
  ${respond('tab-land', 'display: none;')}
  ${flexCenterCenter()}
`;

const app = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Paragraph>TESTING IF MIXIN WORKS</Paragraph>
    </Fragment>
  );
};

export default app;
