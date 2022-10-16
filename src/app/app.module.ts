import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarathonComponent } from './components/marathon/marathon.component';
import { MovieComponent } from './components/movie/movie.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MarathonEffects } from './components/marathon/store/marathon.effects';
import { appReducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarathonComponent,
    MovieComponent,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MarathonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
