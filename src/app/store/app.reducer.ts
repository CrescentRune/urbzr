import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromMarathon from 'src/app/components/marathons/store/marathon.reducers';

export interface AppState {
  marathon: fromMarathon.State
}

export const appReducer: ActionReducerMap<AppState> = {
  marathon: fromMarathon.marathonReducer,
}
