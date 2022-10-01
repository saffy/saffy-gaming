import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicSelectComponent } from './relic-select.component';

describe('RelicSelectComponent', () => {
  let component: RelicSelectComponent;
  let fixture: ComponentFixture<RelicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelicSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
