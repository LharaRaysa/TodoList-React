import { useState } from 'react';

import { CampoTexto, Botao } from "../../components";

import style from "./FormCriarTarefa.module.css";

const FormCriarTarefa = (props) => {
    const [nomeTarefa, setNomeTarefa] = useState('');

    const { setTarefas } = props;

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const adicionarTarefa = (event) => {
        event.preventDefault();
        if(!nomeTarefa){
            return;
        }

        setTarefas(estadoAtual => {
            const tarefa ={ 
                id: estadoAtual.length + 1,
                nome: nomeTarefa
            };
            return [
                ...estadoAtual,
                tarefa,
            ];
        });

        setNomeTarefa('');
    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={adicionarTarefa}>
            <CampoTexto 
                value={nomeTarefa} 
                onChange={onChangeNomeTarefa}
                />
            <Botao texto="+" />
        </form>
    );
};

export { FormCriarTarefa };