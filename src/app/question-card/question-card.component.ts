import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAnswer } from '../IAnswer';
import { IQuestion } from '../IQuestion';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input()question: Partial<IQuestion> = {}
  @Input()answerMode: boolean = false
  @Output()delete: EventEmitter<number|string> = new EventEmitter();
  @Output()answer: EventEmitter<Partial<IQuestion>> = new EventEmitter();
  @Output()unanswer: EventEmitter<number|string> = new EventEmitter();
  formHasError = true;
  formErrors: Set<string> = new Set()

  constructor() { }
  errorMsg(msg: string){
    this.formErrors.add(msg);
    this.formHasError = Array.from(this.formErrors).length > 0;
  }

  clearError(){
    this.formErrors.clear();
    this.formHasError = Array.from(this.formErrors).length > 0;
  }

  setAnswer(value:any){
    this.question.answer = { answerValue: value}
  }

  saveAnswer(){
    if(this.question.answer?.answerValue){
      this.question.answer.answeredAt = Date.now()
      this.answer.emit(this.question)
    }
  }

  ngOnInit(): void {
  }

}
