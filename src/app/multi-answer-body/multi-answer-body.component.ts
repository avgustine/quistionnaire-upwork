import { Component, Input, OnInit } from '@angular/core';
import { answerBody } from '../answer-body.abstract';
import { SingleAnswer } from '../IAnswer';

@Component({
  selector: 'app-multi-answer-body',
  templateUrl: './multi-answer-body.component.html',
  styleUrls: ['./multi-answer-body.component.css']
})
export class MultiAnswerBodyComponent extends answerBody implements OnInit {
  validate(): void {
    const selectionMade = this.value?.find(option => option.checked);
    if(!selectionMade){
      this.errorMsg.emit('You have to make a selection');
    }
    if(selectionMade){
      this.clearError.emit()
    }
  }

  @Input()options?:SingleAnswer[] = []
  @Input()override value?: SingleAnswer[];

  ngOnInit(): void {
    if(!this.answered && this.options){
      this.value = this.options?.map(question => {
          question.checked = false
          return question
      })
      this.validate()
    }
  }

  emitAnswer(){
    console.log(this.value)
  }

}
