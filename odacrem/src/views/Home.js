import React, { Component } from 'react';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <Title>
        Bienvenido a <CompanyNameTitle>Odacrem</CompanyNameTitle>
      </Title>
    );
  }
}

const CompanyNameTitle = styled.span`
  text-size: 30px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 25px;
`;

export default Home;
