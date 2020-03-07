import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBrandComponent } from './logo-brand/logo-brand.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerDownComponent } from './server-down/server-down.component';


@NgModule({
  declarations: [
    LogoBrandComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ServerDownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoBrandComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ServerDownComponent
  ]
})
export class SharedModule { }
