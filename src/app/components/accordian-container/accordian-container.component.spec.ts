import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianContainerComponent } from './accordian-container.component';

describe('AccordianContainerComponent', () => {
  let component: AccordianContainerComponent;
  let fixture: ComponentFixture<AccordianContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
