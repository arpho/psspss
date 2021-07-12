import { CategoryModel } from "../../categories/models/CategoryModel";
import { categoriesProperties } from "./categoriesPropertie";
import { QuestionBase } from "./question-base";

export class QuestionCategories extends QuestionBase<string>{
    controlType = "categories"
    categories: Array<CategoryModel>
    constructor(options:categoriesProperties){
        super(options)
    }
}