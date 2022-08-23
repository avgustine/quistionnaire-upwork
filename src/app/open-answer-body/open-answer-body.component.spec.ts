import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAnswerBodyComponent } from './open-answer-body.component';

describe('OpenAnswerBodyComponent', () => {
  let component: OpenAnswerBodyComponent;
  let fixture: ComponentFixture<OpenAnswerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAnswerBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAnswerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
