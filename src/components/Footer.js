import React from 'react';
import styled from 'styled-components';

import { style } from '../style/style';

const Footer = styled.footer`
  text-align: center;
  height: 40px;
  color: ${style.accentColor};
  background-color: ${style.mainColor};
`;
export const FooterPage = () => {
  return (
    <Footer>
      <p>Created by Mariia Mliuzan. 2022</p>
    </Footer>
  );
};
