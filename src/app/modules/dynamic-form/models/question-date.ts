// tslint:disable: quotemark
import { DateModel } from "../../user/models/birthDateModel";
import { QuestionBase } from "./question-base";
import { QuestionProperties } from './questionproperties';

export class DateQuestion extends QuestionBase<any> {

  controlType = "datebox";
  type: string;

  constructor(options: QuestionProperties<Date> = { key: 'date', label: 'set a date' }) {
    
    super(options);
    /*
    // tslint:disable-next-line: no-string-literal
    this.type = options["type"] || ""; */
  }
}
