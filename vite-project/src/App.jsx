import { Cabecalho, Conteudo, Rodape } from './components';
import { Inicial } from './pages';

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape criador="Lhara"/>
    </>
  );
};

export { App };
