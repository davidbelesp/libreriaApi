import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesRoutingModule } from './Pages/pages-routing.module';

const routes: Routes = [
  { path: '',redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
