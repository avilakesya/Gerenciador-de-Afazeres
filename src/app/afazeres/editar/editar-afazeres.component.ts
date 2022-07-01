import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AfazeresService, Lista } from '../shared';

@Component({
  selector: 'app-editar-afazeres',
  templateUrl: './editar-afazeres.component.html',
  styleUrls: ['./editar-afazeres.component.css']
})
export class EditarAfazeresComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  tarefa!: Lista;

  constructor(
    private afazeresService: AfazeresService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.afazeresService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.afazeresService.atualizar(this.tarefa);
      this.router.navigate(["/afazeres"]);
    }
  }
}
