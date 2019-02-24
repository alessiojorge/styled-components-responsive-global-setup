import React, { Component, Fragment } from 'react';
import GlobalStyle from '../styles/base/_base';

import { respond } from '../styles/abstract/_mixins';
import styled from 'styled-components';

const Paragraph = styled.p`
  ${respond('tab-land', 'display: none;')}
`;

const app = () => {
  return (
    <Fragment>
      <GlobalStyle />
      HOME
      <Paragraph>TESTING IF MIXIN WORKS</Paragraph>
    </Fragment>
  );
};

export default app;
