import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacidadComponent } from './capacidad/capacidad.component';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full',
  },
  {
    path: 'cliente',
    component: CapacidadComponent,
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
