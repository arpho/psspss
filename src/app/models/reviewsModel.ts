import { Genere, ItemModelInterface } from "../modules/item/models/itemModelInterface";
import { ItemServiceInterface } from "../modules/item/models/ItemServiceInterface";
import { QuickAction } from "../modules/item/models/QuickAction";
import { Value } from "../modules/item/models/value";

export class ReviewsModel implements ItemModelInterface{
    title: string;
    note?: string;
    key: string;
    service?: ItemServiceInterface;
    getTitle(): Value {
        return new Value({label:"title",value:this. title})
    }
    getCountingText(): string {
        return "recenasioni"
    }
    getNote(): Value {
        throw new Error("Method not implemented.");
    }
    build?(item: {}) {
        throw new Error("Method not implemented.");
    }
    load?(next?: () => void) {
        throw new Error("Method not implemented.");
    }
    isArchived?(): boolean {
        throw new Error("Method not implemented.");
    }
    archiveItem?(b: boolean) {
        throw new Error("Method not implemented.");
    }
    isArchivable?(): boolean {
        throw new Error("Method not implemented.");
    }
    getValue2(): Value {
        throw new Error("Method not implemented.");
    }
    getValue3(): Value {
        throw new Error("Method not implemented.");
    }
    getValue4(): Value {
        throw new Error("Method not implemented.");
    }
    setKey?(key: string): ItemModelInterface {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }
    serialize() {
        throw new Error("Method not implemented.");
    }
    getElement(): { element: string; genere: Genere; } {
        throw new Error("Method not implemented.");
    }
}