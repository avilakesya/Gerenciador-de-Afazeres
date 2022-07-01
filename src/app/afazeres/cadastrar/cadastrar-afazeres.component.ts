import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AfazeresService, Lista } from '../shared';

@Component({
  selector: 'app-cadastrar-afazeres',
  templateUrl: './cadastrar-afazeres.component.html',
  styleUrls: ['./cadastrar-afazeres.component.css']
})
export class CadastrarAfazeresComponent implements OnInit {

  @ViewChild('formAfazeres', { static: true }) formAfazeres!: NgForm;
  afazeres!: Lista;
  constructor(
    private AfazeresService: AfazeresService,
    private router: Router) { }

  ngOnInit(): void {
    this.afazeres = new Lista();
  }

  cadastrar(): void {
    if (this.formAfazeres.form.valid) {
      this.AfazeresService.cadastrar(this.afazeres);
      this.router.navigate(["/afazeres"]);
    }
  }

}
