import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicLinkComponent } from './relic-link.component';

describe('RelicLinkComponent', () => {
  let component: RelicLinkComponent;
  let fixture: ComponentFixture<RelicLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelicLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
