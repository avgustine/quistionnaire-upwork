import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SingleOption } from '../options.types';

@Component({
  selector: 'app-single-select-crud',
  templateUrl: './single-select-crud.component.html',
  styleUrls: ['./single-select-crud.component.css']
})
export class SingleSelectCrudComponent implements OnInit {

  @Input() options: SingleOption[] = []

  @Output() changed: EventEmitter<SingleOption[]> = new EventEmitter<SingleOption[]>();

  constructor() { }

  ngOnInit(): void {
  }

  validateOptions(){
    this.changed.emit(this.options);
  }



  addOption(){
    this.options.push({
      optionId: this.options.length + 1,
      optionText: ''
    })
    this.changed.emit(this.options)
  }

  changeOptionTextchange(e: Event){
    console.log(e)
  }

  removeOption(id: number){
    this.options = this.options.filter(o => o.optionId != id)
  }

}
