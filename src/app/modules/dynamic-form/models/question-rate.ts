import { QuestionBase } from "./question-base";
import {QuestionProperties} from './questionproperties'

export class QuestionRate extends QuestionBase<number>{
    constructor(options:QuestionProperties<number>){
        super(options)
        this.controlType = "rate-input"
    }

}