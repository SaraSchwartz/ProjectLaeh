import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSequenceComponent } from './new-sequence.component';

describe('NewSequenceComponent', () => {
  let component: NewSequenceComponent;
  let fixture: ComponentFixture<NewSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
