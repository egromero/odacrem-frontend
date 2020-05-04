import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Home extends Component {
  render() {
    return (
      <Container>
        <Title>
          Bienvenido a <CompanyNameTitle>Odacrem</CompanyNameTitle>
        </Title>
        <Button href="/users/sign_in" variant="outlined" color="primary" >
          Ingresar
        </Button>
        <Button href="/users/sign_up" variant="outlined" color="Secundary" >
          Registrarse
        </Button>
    </Container>
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
