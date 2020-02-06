import React from 'react';
import Icon from './Icon';

import styled from 'styled-components';

function Header() {
  return (
    <HeaderStyle>
      <FlexHeader>
        <h1>Filterable Stats</h1>
        <Filler></Filler>
        <ul>
          <Icon url='https://github.com/E-Feng' type='fa fa-github' />
          <Icon url='https://www.linkedin.com/in/elvin-feng-527b8b81/' type='fa fa-linkedin' />
        </ul>
      </FlexHeader>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  background: #552583;
  color: #ffffff;
  padding: 40px 0 10px 0;
  border-bottom: 2px solid #FDB927;
`

const FlexHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80%;

  @media (max-width: 768px) {
    width: 95%;
  }
`

const Filler = styled.div`
  flex: 1;
`

export default Header;
