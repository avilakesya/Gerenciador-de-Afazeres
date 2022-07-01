import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarefasRoutes } from "./afazeres";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/afazeres/lista-afazeres',
    pathMatch: 'full'
},
...TarefasRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
