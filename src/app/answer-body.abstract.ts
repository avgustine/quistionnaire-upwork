import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  template:''
})
export abstract class answerBody {
  @Output()answer: EventEmitter<string | any> = new EventEmitter();
  @Input()value?: any | string
  @Input()answered: boolean = false;
  @Output()errorMsg: EventEmitter<string> = new EventEmitter();
  @Output()clearError: EventEmitter<undefined> = new EventEmitter();
  abstract validate():void;
}
