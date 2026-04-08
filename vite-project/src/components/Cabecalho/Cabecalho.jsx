const Cabecalho = (props) => {
    const { nomeUsuario } = props;
    return (
        <div>
         Bem-vindo, {nomeUsuario}
        </div>
    );
};

export { Cabecalho };