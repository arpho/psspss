import { ListProperties } from "./listProperties";
import { QuestionBase } from "./question-base";
import { ComponentRef } from '@ionic/core';


export class QuestionList extends QuestionBase<string>{
 
    constructor(options:ListProperties){
        super(options)
        this.controlType ="itemsList"
    }
}