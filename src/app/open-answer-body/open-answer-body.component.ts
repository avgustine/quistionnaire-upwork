import { Component, OnInit } from '@angular/core';
import { answerBody } from '../answer-body.abstract';

@Component({
  selector: 'app-open-answer-body',
  templateUrl: './open-answer-body.component.html',
  styleUrls: ['./open-answer-body.component.css']
})
export class OpenAnswerBodyComponent  extends answerBody implements OnInit  {

  charsLimit = 255;

  validate(): void {
    const hasText = this.value && this.value.length > 0;
    const textExceedingLimit = hasText && this.value.length > this.charsLimit
    if(!hasText){
      this.errorMsg.emit('For open answer text is required')
    }
    if(textExceedingLimit){
      this.errorMsg.emit(`Text should not exceed ${this.charsLimit} symbols`);
    }

    if(hasText && !textExceedingLimit){
      this.clearError.emit();
    }
  }

  ngOnInit(): void {
    if(!this.answered){
      this.validate();
    }
  }

}
