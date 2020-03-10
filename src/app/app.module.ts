import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    AnimateOnScrollModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AppModule { }
