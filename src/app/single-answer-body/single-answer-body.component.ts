import { Component, Input, OnInit } from '@angular/core';
import { answerBody } from '../answer-body.abstract';
import { SingleOption } from '../options.types';

@Component({
  selector: 'app-single-answer-body',
  templateUrl: './single-answer-body.component.html',
  styleUrls: ['./single-answer-body.component.css']
})
export class SingleAnswerBodyComponent extends answerBody implements OnInit {
  validate(): void {
    const selectionMade = Boolean(this.value)
    if(!selectionMade){
      this.errorMsg.emit('You have to make a selection')
    }
    if(selectionMade){
      this.clearError.emit()
    }
  }

  @Input()options?:SingleOption[] = []

  ngOnInit(): void {
    if(!this.answered){
      this.validate()
    }
  }

  emitAnswer(){
    console.log(this.value);
  }

}
