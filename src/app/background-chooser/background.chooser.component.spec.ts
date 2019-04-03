import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChooserComponent } from './background.chooser.component';

describe('BackgroundChooserComponent', () => {
  let component: BackgroundChooserComponent;
  let fixture: ComponentFixture<BackgroundChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
