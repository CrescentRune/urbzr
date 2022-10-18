import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "src/app/store/app.reducer";

@Component({
  standalone: true,
  selector: 'app-marathon-page',
  template: `

  `
})
export class MarathonsPage {
  constructor(
    private store: Store<AppState>
  ) {}
}
