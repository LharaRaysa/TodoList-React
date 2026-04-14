import { useAppContext } from "../../hooks";

import { Loading } from "../Loading";

import { ListaTarefaItem } from "./ListaTarefaItem";

import style from './ListaTarefas.module.css'

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext();
    
    return(
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>
                    Carregando... 
                    <Loading/>
                </p>
            )}
            
            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}

            {tarefas.map(item => 
                <ListaTarefaItem 
                 key={item.id} 
                 id={item.id} 
                 nome={item.nome} />
            )}
        </ul>
    );
};

export { ListaTarefas };