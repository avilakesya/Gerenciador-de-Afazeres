import { Injectable } from '@angular/core';

import { Lista } from './';

@Injectable()
export class AfazeresService {

  constructor() { }

listarTodos(): Lista[] {
  const tarefas = localStorage['tarefas'];
  return tarefas ? JSON.parse(tarefas) : [];
}

cadastrar(lista: Lista): void {
  const tarefas = this.listarTodos();
  lista.id = new Date().getTime();
  tarefas.push(lista);
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

buscarPorId(id: number): Lista | any {
  const tarefas: Lista[] = this.listarTodos();
  return tarefas.find(tarefa => tarefa.id === id);
}

atualizar(tarefa: Lista): void {
  const tarefas: Lista[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if (tarefa.id === obj.id) {
      objs[index] = tarefa;
    }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

remover(id: number): void {
  let tarefas: Lista[] = this.listarTodos();
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

alterarStatus(id: number): void {
  const tarefas: Lista[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if (id === obj.id) {
      objs[index].concluida = !obj.concluida;
    }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

alterarPrioridade(id: number): void {
  const tarefas: Lista[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if (id === obj.id) {
      objs[index].urgente = !obj.urgente;
    }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}
}
