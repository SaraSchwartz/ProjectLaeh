import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySequencesComponent } from './my-sequences.component';

describe('MySequencesComponent', () => {
  let component: MySequencesComponent;
  let fixture: ComponentFixture<MySequencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySequencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
