import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyConfigComponent } from './party-config.component';

describe('PartyConfigComponent', () => {
  let component: PartyConfigComponent;
  let fixture: ComponentFixture<PartyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
