import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Marathon } from '../../service/marathon.interface';

@Component({
  selector: 'app-marathon',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.css']
})
export class MarathonComponent implements OnInit {

  marathon: Marathon | null = null;

  private marathons$ = this.store.select('marathon')
                        .pipe(map((marathonState) => marathonState.marathons));

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ marathon }) => {
      this.marathon = marathon;
    });
  }

}
