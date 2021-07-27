import { Genere, ItemModelInterface } from "../modules/item/models/itemModelInterface";
import { ItemServiceInterface } from "../modules/item/models/ItemServiceInterface";
import { QuickAction } from "../modules/item/models/QuickAction";
import { Value } from "../modules/item/models/value";

export class ReviewsModel implements ItemModelInterface {
    note?: string;
    quickActions?: QuickAction[];
    archived?: boolean;
    isArchived?(): boolean {
        throw new Error("Method not implemented.");
    }

    initialize(args: any): ReviewsModel {
        Object.assign(this, args)
        return this
    }

    title: string;
    reference: string
    key: string;
    rate: number
    author: string
    service?: ItemServiceInterface;
    getTitle(): Value {
        return new Value({ label: "title", value: this.title })
    }

    getCountingText(): string {
        return "recensioni"
    }

    getNote(): Value {
        return new Value({ label: "commento", value: this.reference })
    }

   
   
    isArchivable?(): boolean {
        return false
    }

    getunderTitleField(): Value {
        throw new Error("Method not implemented.");
    }

    getValue3(): Value {
        throw new Error("Method not implemented.");
    }

    getValue4(): Value {
        throw new Error("Method not implemented.");
    }

    setKey?(key: string): ItemModelInterface {
        this.key = key
        return this
    }

    getEditPopup(item?: ItemModelInterface, service?: ItemServiceInterface) {
        throw new Error("Method not implemented.");
    }

    getAggregate(): Value {
        throw new Error("Method not implemented.");
    }

    aggregateAction?() {
        throw new Error("Method not implemented.");
    }

    hasQuickActions?(): boolean {
        return false
    }

    serialize() {
        return { author: this.author||'', review: this.rate||0, reference: this.reference||0 }
    }
    
    getElement(): { element: string; genere: Genere; } {
        throw new Error("Method not implemented.");
    }
}