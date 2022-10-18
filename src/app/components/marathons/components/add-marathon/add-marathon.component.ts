import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-marathon',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './add-marathon.component.html',
  styleUrls: ['./add-marathon.component.css']
})
export class AddMarathonComponent implements OnInit {

  marathonForm: FormGroup;

  constructor() {
    this.marathonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      movies: new FormArray([]),
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

}
