import { SingleOption } from "./options.types";

export interface IAnswer {
  answeredAt?: string | number;
  answerValue: SingleAnswer[] | string | SingleAnswer | any
}

export type SingleAnswer = SingleOption & {
  checked?: boolean;
};
