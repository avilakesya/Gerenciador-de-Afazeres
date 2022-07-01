import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AfazeresService, AfazeresConcluidaDirective } from './shared';
import { ListaAfazeresComponent } from './lista';
import { CadastrarAfazeresComponent } from './cadastrar';
import { EditarAfazeresComponent } from './editar';

@NgModule({
  declarations: [
    ListaAfazeresComponent,
    CadastrarAfazeresComponent,
    EditarAfazeresComponent,
    AfazeresConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AfazeresService
  ]
})
export class AfazeresModule { }
