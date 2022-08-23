import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQuestion } from '../IQuestion';
import { QuestionsCrudService } from '../questions-crud.service';

@Component({
  selector: 'app-question-management-page',
  templateUrl: './question-management-page.component.html',
  styleUrls: ['./question-management-page.component.css']
})
export class QuestionManagementPageComponent implements OnInit {

  questions!: BehaviorSubject<IQuestion[]>;

  constructor(private questionCRUD: QuestionsCrudService) { }

  ngOnInit(): void {
    this.refreshItems();
    this.questionCRUD.retrieveItemsSortByCreation();

  }

  refreshItems(){
    this.questions = this.questionCRUD.getItems()
    }

    deleteQuestion(id: number | string){
      this.questionCRUD.deleteByTimeStamp(id);
      this.questionCRUD.retrieveItemsSortByCreation();
      this.refreshItems();
    }


}
