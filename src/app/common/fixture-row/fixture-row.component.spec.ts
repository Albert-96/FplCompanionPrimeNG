import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureRowComponent } from './fixture-row.component';

describe('FixtureRowComponent', () => {
  let component: FixtureRowComponent;
  let fixture: ComponentFixture<FixtureRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixtureRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
