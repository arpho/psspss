import { QuestionProperties } from "./questionproperties";
import { ComponentRef } from '@ionic/core';

export interface ListProperties extends QuestionProperties<string>{
    createPopupPage: ComponentRef
}