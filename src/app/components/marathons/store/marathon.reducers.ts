
import { Action, createReducer, on } from '@ngrx/store';
import { Marathon } from '../service/marathon.interface';
import { marathons } from './marathon-test.const';
import * as MarathonActions from './marathon.actions';

export interface State {
  marathons: Marathon[];
}

const initialState: State = {
  marathons: marathons
}

const _marathonReducer = createReducer(
  initialState,
  on(
    MarathonActions.addMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.concat({...action.marathon})
    })
  ),
  on(
    MarathonActions.deleteMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.filter((_, index) => index !== action.index)
    })
  ),
  on(
    MarathonActions.updateMarathon,
    (state, action) => ({
      ...state,
      marathons: state.marathons.map(
        (marathon, index) => index === action.index ? { ...action.marathon } : marathon
      )
    })
  ),
  on(
    MarathonActions.setMarathons,
    (state, action) => ({
      ...state,
      marathons: [...action.marathons]
    })
  )
)

export function marathonReducer(state: State|undefined, action: Action) {
  return _marathonReducer(state, action);
}


// export function marathonReducer(
//   state = initialState,
//   action: MarathonActions.MarathonActions
// ){
  // switch (action.type) {
  //   case MarathonActions.SET_MARATHONS:
  //     return {
  //       ...state,
  //       marathons: action.payload
  //     }
  //   case MarathonActions.ADD_MARATHON:
  //     return {
  //       ...state,
  //       marathons: state.marathons.concat(action.payload)
  //     }
  //   case MarathonActions.UPDATE_MARATHON:
  //     const updatedMarathon = {
  //       ...state.marathons[action.payload.index],
  //       ...action.payload.marathon
  //     }
  //     const updatedMarathons = [...state.marathons];
  //     updatedMarathons[action.payload.index] = updatedMarathon;
  //     return {
  //       ...state,
  //       marathons: updatedMarathons
  //     };
  //   case MarathonActions.DELETE_MARATHON:
  //     const filteredMarathons = state.marathons.filter((_, index) => index !== action.payload);
  //     return {
  //       ...state,
  //       marathons: filteredMarathons
  //     }
  //   default:
  //     return state;
  // }

// }
