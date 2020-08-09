import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsHeaderComponent } from './objects-header.component';

describe('ObjectsHeaderComponent', () => {
  let component: ObjectsHeaderComponent;
  let fixture: ComponentFixture<ObjectsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
