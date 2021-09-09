import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPictureComponent } from './setting-picture.component';

describe('SettingPictureComponent', () => {
  let component: SettingPictureComponent;
  let fixture: ComponentFixture<SettingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
