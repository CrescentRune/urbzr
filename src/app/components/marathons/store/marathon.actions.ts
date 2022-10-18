import { Action, createAction, props } from "@ngrx/store";
import { Marathon } from "../service/marathon.interface";


// export const SET_MARATHONS = '[Marathons] Set Marathons';
// export const FETCH_MARATHONS = '[Marathons] Fetch Marathons';
// export const ADD_MARATHON = '[Marathons] Add Marathons';
// export const UPDATE_MARATHON = '[Marathons] Update Marathon';
// export const DELETE_MARATHON =  '[Marathons] Delete Marathon';
// export const STORE_MARATHONS = '[Marathons] Store Marathon';


// export class SetMarathons implements Action {
//   readonly type = SET_MARATHONS;

//   constructor(public payload: Marathon[]) {}
// }
export const addMarathon = createAction(
  '[Marathons] Add Marathons',
  props<{
    marathon: Marathon
  }>()
);

export const setMarathons = createAction(
  '[Marathons] Set Marathons',
  props<{
    marathons: Marathon[]
  }>()
)

export const updateMarathon = createAction(
  '[Marathons] Update Marathon',
  props<{
    index: number,
    marathon: Marathon
  }>()
)

export const deleteMarathon = createAction(
  '[Marathons] Delete Marathon',
  props<{
    index: number
  }>()
)

export const fetchMarathons = createAction(
  '[Marathons] Fetch Marathons'
);

export const storeMarathons = createAction(
  '[Marathons] Store Marathon'
);

// export class FetchMarathons implements Action {
//   readonly type = FETCH_MARATHONS;
// }

// export class AddMarathon implements Action {
//   readonly type = ADD_MARATHON;

//   constructor(public payload: Marathon) {}
// }

// export class UpdateMarathon implements Action {
//   readonly type = UPDATE_MARATHON;

//   constructor(public payload: { index: number, marathon: Marathon }) {}
// }

// export class DeleteMarathon implements Action {
//   readonly type = DELETE_MARATHON;

//   constructor(public payload: number) {}
// }

// export class StoreMarathons implements Action {
//   readonly type = STORE_MARATHONS;

//   constructor(public payload: Marathon[]) {}
// }

// export type MarathonActions =
//   | SetMarathons
//   | FetchMarathons
//   | AddMarathon
//   | UpdateMarathon
//   | DeleteMarathon
//   | StoreMarathons;
