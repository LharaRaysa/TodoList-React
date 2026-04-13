import { Outlet } from "react-router-dom";

import { Cabecalho, Conteudo, Rodape } from "../../../components";

const LayoutPadrao = () => {
    return (
    <>
    <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <Outlet/>
      </Conteudo> 
      <Rodape criador="Lhara"/>
    </>
    );
};

export {LayoutPadrao};