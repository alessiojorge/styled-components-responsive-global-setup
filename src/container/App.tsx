import React, { Fragment } from 'react';
import GlobalStyle from '../styles/base/_base';

import { respond } from '../styles/abstract/_mixins';
import styled from 'styled-components';

const Paragraph = styled.p`
  align-items: center;
  color: violet;
  ${respond('tab-land', 'display: none;')}
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
