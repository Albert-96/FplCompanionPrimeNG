import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamTeamComponent } from './dream-team.component';

describe('DreamTeamComponent', () => {
  let component: DreamTeamComponent;
  let fixture: ComponentFixture<DreamTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
