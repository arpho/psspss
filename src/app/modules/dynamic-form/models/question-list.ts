import { QuestionBase } from "./question-base";
import { QuestionProperties } from "./questionproperties";

export class QuestionList extends QuestionBase<string>{
    constructor(options:QuestionProperties<string>){
        super(options)
    }
}