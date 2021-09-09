import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSequencesComponent } from './shared-sequences.component';

describe('SharedSequencesComponent', () => {
  let component: SharedSequencesComponent;
  let fixture: ComponentFixture<SharedSequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
