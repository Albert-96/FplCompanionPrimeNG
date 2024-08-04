import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailDialogComponent } from './player-detail-dialog.component';

describe('PlayerDetailDialogComponent', () => {
  let component: PlayerDetailDialogComponent;
  let fixture: ComponentFixture<PlayerDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
