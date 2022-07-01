import { Routes } from "@angular/router";

import { ListaAfazeresComponent } from "./lista";
import { CadastrarAfazeresComponent } from './cadastrar';
import { EditarAfazeresComponent } from './editar';

export const TarefasRoutes: Routes = [
  {
      path: 'afazeres',
      redirectTo: 'afazeres/lista-afazeres'
  },
  {
      path: 'afazeres/lista-afazeres',
      component: ListaAfazeresComponent
  },
  {
    path: 'afazeres/cadastrar',
    component: CadastrarAfazeresComponent
},
{
  path: 'afazeres/editar/:id',
  component: EditarAfazeresComponent
},
];
