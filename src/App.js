import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';

import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  state = {
    autores: [
      {
        "nome": "Paulo",
        "livro": "React",
        "preco": 1000
      },
      {
        "nome": "Daniel",
        "livro": "Java",
        "preco": 99
      },
      {
        "nome": "Marcos",
        "livro": "Go",
        "preco": 150
      }
    ],
  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        })
      }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
