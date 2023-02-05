import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default class Sobre extends Component {
  render() {
    return (
      <div>
        Pagina Sobre...
        <Link to="/">Ir para pagina Home</Link>
      </div>
    );
  }
}
