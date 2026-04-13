import { useState } from 'react';

import { CampoTexto, Botao } from "../../components";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = (props) => {
    const [nomeTarefa, setNomeTarefa] = useState('');

    const { _setTarefas } = props;

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const _adicionarTarefa = () => {

    };

    return (
        <form className={style.FormCriarTarefa}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto="+" />
        </form>
    );
};

export { FormCriarTarefa };