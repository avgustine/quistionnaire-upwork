import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnswerBodyComponent } from './single-answer-body.component';

describe('SingleAnswerBodyComponent', () => {
  let component: SingleAnswerBodyComponent;
  let fixture: ComponentFixture<SingleAnswerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAnswerBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAnswerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
