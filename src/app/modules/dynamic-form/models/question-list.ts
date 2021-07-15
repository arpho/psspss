import { ListProperties } from "./listProperties";
import { QuestionBase } from "./question-base";
import { QuestionProperties } from "./questionproperties";

export class QuestionList extends QuestionBase<string>{
    constructor(options:ListProperties){
        super(options)
        this.controlType ="itemsList"
        console.log('value',this.value)
    }
}