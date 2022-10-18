import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarathonsPage } from './components/marathons/marathons.page';
import { MovieComponent } from './components/movie/movie.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarathonEffects } from './components/marathons/store/marathon.effects';
import { appReducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarathonsPage,
    MovieComponent,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MarathonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
