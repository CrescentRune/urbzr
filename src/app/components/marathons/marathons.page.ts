import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";

import { AppState } from "src/app/store/app.reducer";

@Component({
  standalone: true,
  selector: 'app-marathon-page',
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    RouterModule
  ],
  template: `
    <h1 class="display-1" style="padding: 10px;">Marathons</h1>
    <mat-grid-list *ngIf="marathons$ | async as marathons" cols="1">
      <mat-grid-tile style="align-items: baseline;">
        <mat-list style="width: 95%">
          <ng-container *ngFor="let marathon of marathons">
            <mat-list-item [routerLink]="marathon.id" routerLinkActive="router-link-active" >{{marathon.name}}</mat-list-item>
            <mat-divider></mat-divider>
          </ng-container>
        </mat-list>
      </mat-grid-tile>
    </mat-grid-list>
  `
})
export class MarathonsPage {

  marathons$ = this.store.select((state) => state.marathon.marathons);

  constructor(
    private store: Store<AppState>
  ) {}


}
