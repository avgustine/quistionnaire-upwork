import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestion } from '../IQuestion';
import { SingleOption } from '../options.types';
import { QuestionsCrudService } from '../questions-crud.service';
import { QuestionTypes } from '../QuestionTypes';

@Component({
  selector: 'app-question-crude',
  templateUrl: './question-crude.component.html',
  styleUrls: ['./question-crude.component.css']
})
export class QuestionCrudeComponent implements OnInit {

  question: IQuestion = {createdAt: '', options: [], questionText: '', type:  null};
  questionTypes?: {type:QuestionTypes, text: string}[] = [];
  newQuestion = true;
  formHasError = true;
  formErrors: Set<string> = new Set()


  constructor(private questionService: QuestionsCrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.parseQuestionTypes();

    const questionId = this.route.snapshot.paramMap.get('id');

    this.newQuestion = Boolean(!questionId);
    if(!this.newQuestion && questionId){
      this.loadQuestion(questionId)
    }
    this.validateQuestion();
  }

  validateQuestion(){
    const titleCheck = this.question.questionText && this.question.questionText != '';
    const typeCheck = Boolean(this.question.type)
    const validatableType = this.question.type == QuestionTypes.MultiSelection || this.question.type == QuestionTypes.SingleSelect
    const optionsNumberCheck = this.question.options.length > 1;
    const optionHasEmptyTextCheck = this.question.options.find(option => !option.optionText || option.optionText == '')
    if(titleCheck){
      this.formErrors.delete('Question text required')
    } else {
      this.formErrors.add('Question text required')
    }

    if(typeCheck){
      this.formErrors.delete('Question type required')
    } else {
      this.formErrors.add('Question type required')
    }

    if(validatableType){
      if(optionsNumberCheck){
        this.formErrors.delete('For this type of question at least 2 options required')
      } else {
        this.formErrors.add('For this type of question at least 2 options required')
      }
      if(optionHasEmptyTextCheck){
        this.formErrors.add('All options must have text')

      } else {
        this.formErrors.delete('All options must have text')
      }
    } else {
      this.formErrors.delete('For this type of question at least 2 options required')
      this.formErrors.delete('All options must have text')
    }

    console.log(this.formErrors)

    this.formHasError = Array.from(this.formErrors).length > 0

  }

  save(){
    if(this.newQuestion){
      this.question.createdAt = Date.now()
      this.questionService.saveNewQuestion(this.question)
    } else {
      if(this.question.answer){
        this.question.answer = undefined
      }
      this.questionService.updateQuestion(this.question)
    }
    this.router.navigateByUrl('');
  }

  setOptions(options: SingleOption[]){
    this.question.options = options
    this.validateQuestion()

  }

  loadQuestion(id: string| number){
    //yes, timestamp is ID

    const loadedQuestion = this.questionService.loadByTimestamp(id);
    console.log(loadedQuestion)
    if(loadedQuestion){
      this.question = loadedQuestion
    }
  }

  setQuestionType(type: QuestionTypes){
    if(this.question){
      this.question.type = type;
    }
  }

  parseQuestionTypes(){
    (Object.keys(QuestionTypes) as Array<keyof QuestionTypes>).map((key) => {
      switch(key){
        case QuestionTypes.MultiSelection:
          this.questionTypes?.push({type: QuestionTypes.MultiSelection, text:"Multiple Selection"})
          break;
        case QuestionTypes.SingleSelect:
          this.questionTypes?.push({type: QuestionTypes.SingleSelect, text:"Single Select"})
          break;
        case QuestionTypes.OpenQuestion:
          this.questionTypes?.push({type: QuestionTypes.OpenQuestion, text:"Open Answer - free text"})
          break;
      }
    })
  }

}
