import { QuestionProperties } from "./questionproperties";

export interface categoriesProperties extends QuestionProperties<string> {
   buttonText?:string // is the text close to the button
}