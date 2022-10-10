import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-marathon',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-marathon.component.html',
  styleUrls: ['./add-marathon.component.css']
})
export class AddMarathonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
