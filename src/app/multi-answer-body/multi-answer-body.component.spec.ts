import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAnswerBodyComponent } from './multi-answer-body.component';

describe('MultiAnswerBodyComponent', () => {
  let component: MultiAnswerBodyComponent;
  let fixture: ComponentFixture<MultiAnswerBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAnswerBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAnswerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
