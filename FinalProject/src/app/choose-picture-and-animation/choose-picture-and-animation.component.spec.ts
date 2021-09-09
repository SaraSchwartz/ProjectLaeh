import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePictureAndAnimationComponent } from './choose-picture-and-animation.component';

describe('ChoosePictureAndAnimationComponent', () => {
  let component: ChoosePictureAndAnimationComponent;
  let fixture: ComponentFixture<ChoosePictureAndAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePictureAndAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePictureAndAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
