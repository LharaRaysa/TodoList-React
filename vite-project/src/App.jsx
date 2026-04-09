import { Cabecalho, Conteudo, Rodape } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <h1>Título</h1>
        <p>texto texto</p>
      </Conteudo>
      <Rodape criador="Lhara"/>
    </>
  );
};

export { App };
