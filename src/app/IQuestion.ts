import { IAnswer } from "./IAnswer";
import { SingleOption } from "./options.types";
import { QuestionTypes } from "./QuestionTypes";


export interface IQuestion {
  questionText: string;
  createdAt: number | string;
  type: QuestionTypes | null,
  answer?: IAnswer,
  options: SingleOption[]
}

