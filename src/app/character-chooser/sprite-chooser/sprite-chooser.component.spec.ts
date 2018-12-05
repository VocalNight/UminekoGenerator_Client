import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteChooserComponent } from './sprite-chooser.component';

describe('SpriteChooserComponent', () => {
  let component: SpriteChooserComponent;
  let fixture: ComponentFixture<SpriteChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
