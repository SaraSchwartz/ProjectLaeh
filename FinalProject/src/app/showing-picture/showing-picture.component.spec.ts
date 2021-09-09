import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingPictureComponent } from './showing-picture.component';

describe('ShowingPictureComponent', () => {
  let component: ShowingPictureComponent;
  let fixture: ComponentFixture<ShowingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
