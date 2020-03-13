import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBrandComponent } from './logo-brand/logo-brand.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerDownComponent } from './server-down/server-down.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    LogoBrandComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ServerDownComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [
    LogoBrandComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ServerDownComponent,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule
  ]
})
export class SharedModule { }
