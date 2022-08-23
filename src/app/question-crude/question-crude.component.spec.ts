import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCrudeComponent } from './question-crude.component';

describe('QuestionCrudeComponent', () => {
  let component: QuestionCrudeComponent;
  let fixture: ComponentFixture<QuestionCrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCrudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
