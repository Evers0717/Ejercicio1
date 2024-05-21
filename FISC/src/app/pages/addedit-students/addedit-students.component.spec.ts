import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditStudentsComponent } from './addedit-students.component';

describe('AddeditStudentsComponent', () => {
  let component: AddeditStudentsComponent;
  let fixture: ComponentFixture<AddeditStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeditStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeditStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
