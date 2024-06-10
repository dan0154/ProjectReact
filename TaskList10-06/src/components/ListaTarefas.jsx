import { useCallback, useReducer, useEffect, useState } from "react";
const tarefasReduce = (state, action) =>{
    switch(action.type){
        case "add_tarefa":
            return[...state, action.payload]
        //payload é o novo dado (valor da tarefa) que está sendo adicionado à lista
        case "concluir_tarefa":
            const atualizarTarefa = [...state]
            atualizarTarefa[action.payload].completed = true
            //utilizando a função completed para marcar como verdadeiro
            //quando o dado atual (payload) for marcado como concluido
            return atualizarTarefa
    }
}
export default function ListaTarefas(){
    return(
        <div className="center">
            <h1>Lista de tarefas</h1>
            <div className="inputArea">
                <input type="text" placeholder="Nova tarefa"/>
                <button>Add Tarefa</button>
            </div>
        </div>
    )
}