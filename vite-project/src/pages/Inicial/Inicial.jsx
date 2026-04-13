import {FormCriarTarefa, ListaTarefas} from '../../components';

import style from './Inicial.module.css';

const Inicial = () => {
    const tarefas = [
        {id: 1, nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3, nome: 'Item 3'},
    ];
    return (
        <div className={style.Inicial}>
        <FormCriarTarefa/>
        <ListaTarefas tarefas={tarefas}/>  
        </div>
    );

};

export { Inicial };