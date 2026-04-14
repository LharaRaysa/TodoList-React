import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";

import style from './ListaTarefaItem.module.css';

const ListaTarefaItem = (props) => {
    const { id, nome } = props;
    
    const { removerTarefa } = useAppContext();

    return(
        <li className={style.ListaTarefaItem}>
        {nome}
        <Botao 
            texto="-"
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)}
         />
        </li>
    );
};

export {ListaTarefaItem};