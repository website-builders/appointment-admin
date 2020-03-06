
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutWrapperComponent
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    LayoutWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class LayoutModule { }
