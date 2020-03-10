import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'style-guide',
    component: StyleGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
