import { BrowserRouter, Router } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Router/>
      {/* <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape criador="Lhara"/> */}
    </BrowserRouter>
  );
};

export { App };
