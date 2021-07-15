import { ListableItemInterface } from "../../dynamic-form/models/listableItemInterface";
import { Value } from "../../item/models/value";
import { DateModel } from "../../user/models/birthDateModel";

export class Rating implements ListableItemInterface {
    date: DateModel
    author: string
    reference: string
    rate: number
    key: string

    get leftField() {
        return new Value({ value: this.rate, label: "valutazione" })
    }

    get middlefield() {
        return new Value({ value: this.reference, label: "giudizio" })
    }

    get rightField() {
        return new Value({ value: this.date.formatDate(), label: "data" })
    }


    initialize(arg) {
        Object.assign(this, arg)
        return this
    }
    serialize() {
        return { "key": this.key, "author": this.author, "reference": this.reference, "rate": this.rate, "date": this.date.formatFullDate() }
    }
}