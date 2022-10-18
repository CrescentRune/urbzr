import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarathonComponent } from './add-marathon.component';

describe('AddMarathonComponent', () => {
  let component: AddMarathonComponent;
  let fixture: ComponentFixture<AddMarathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddMarathonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
