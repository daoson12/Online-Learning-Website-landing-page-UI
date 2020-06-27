import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribeComponent } from './subcribe.component';

describe('SubcribeComponent', () => {
  let component: SubcribeComponent;
  let fixture: ComponentFixture<SubcribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
