import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLaborsComponent } from './social-labors.component';

describe('SocialLaborsComponent', () => {
  let component: SocialLaborsComponent;
  let fixture: ComponentFixture<SocialLaborsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLaborsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialLaborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
