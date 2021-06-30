import { TextboxQuestion } from "../../item/models/question-textbox";
import { QuestionProperties } from "./questionproperties";

export class ictureBox extends TextboxQuestion{
    constructor(options:QuestionProperties<string>){
        super(options)
        this.controlType = "pictureBox"
    }
}