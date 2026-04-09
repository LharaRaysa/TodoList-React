import { Botao, TIPO_BOTAO } from "../../Botao";

import style from './ListaTarefaItem.module.css';

const ListaTarefaItem = (props) => {
    const { nome } = props;
    return(
        <li className={style.ListaTarefaItem}>
            {nome}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}/>
        </li>
    );
};

export {ListaTarefaItem};