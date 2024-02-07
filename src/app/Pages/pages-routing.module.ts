import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { LibrosComponent } from './libros/libros.component';
import { TemasComponent } from './temas/temas.component';
import { AutoresComponent } from './autores/autores.component';


const routes : Routes = [
  {
    path: "main",component:MainPageComponent, children:[
      { path: "libros",component: LibrosComponent, data:{title:"Libros"}},
      { path: "temas", component: TemasComponent, data:{title:"Temas"}},
      { path: "autores", component: AutoresComponent, data:{title:"Autores"}}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes) 
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }