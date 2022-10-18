import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromApp from 'src/app/store/app.reducer'
import * as fromMarathon from './marathon.reducers';
import * as MarathonActions from './marathon.actions';
import { environment } from "src/environments/environment";

import { map, switchMap, withLatestFrom } from "rxjs";
import { Marathon } from "../service/marathon.interface";



@Injectable()
export class MarathonEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  fetchMarathons = createEffect(() =>
    this.actions$.pipe(
      ofType(MarathonActions.fetchMarathons),
      switchMap(() => {
        return this.http.get<Marathon[]>(`${environment.apiURL}/marathons`)
      }),
      map((marathons) => MarathonActions.setMarathons({marathons}))
    ),
    { dispatch: false }
  );

  storeMarathons = createEffect(() =>
      this.actions$.pipe(
        ofType(MarathonActions.storeMarathons),
        withLatestFrom(this.store.select('marathon')),
        switchMap(([action, marathonsState]) =>
          this.http.put(
            `${environment.apiURL}/marathons`,
            marathonsState.marathons
          )
        )
      ),
      { dispatch: false }
  )
}
