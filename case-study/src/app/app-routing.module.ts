import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './body/body.component';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./customers/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'home',
    component : BodyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
