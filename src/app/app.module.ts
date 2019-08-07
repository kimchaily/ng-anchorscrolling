import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { SubzeroComponent } from './subzero/subzero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ScrollSpyDirective,
    SubzeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
