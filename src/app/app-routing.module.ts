import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCrudeComponent } from './question-crude/question-crude.component';
import { QuestionManagementPageComponent } from './question-management-page/question-management-page.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';


const routes: Routes = [
  {path: '', component: QuestionManagementPageComponent},
  {path: 'questions-list', component: QuestionsListComponent},
  {path: 'questions-crude/new', component: QuestionCrudeComponent},
  {path: 'questions-crude/edit/:id', component: QuestionCrudeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
