import { Component, OnInit } from '@angular/core';

import { AfazeresService, Lista } from '../shared';

@Component({
  selector: 'app-lista-afazeres',
  templateUrl: './lista-afazeres.component.html',
  styleUrls: ['./lista-afazeres.component.css']
})
export class ListaAfazeresComponent implements OnInit {

  tarefas: Lista[] | any;

  constructor(private afazereService: AfazeresService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Lista[] {
  	return this.afazereService.listarTodos();
  }

  remover($event: any, tarefa: Lista | any): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.afazereService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Lista | any): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.afazereService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarPrioridade(tarefa: Lista | any): void {
    if (confirm('Deseja marcar a tarefa como urgente "' + tarefa.nome + '"?')) {
      this.afazereService.alterarPrioridade(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
