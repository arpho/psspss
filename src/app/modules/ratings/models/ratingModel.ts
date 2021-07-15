import { ListableItemInterface } from "../../dynamic-form/models/listableItemInterface";
import { Value } from "../../item/models/value";
import { DateModel } from "../../user/models/birthDateModel";

export class RatingModel implements ListableItemInterface {
    date: DateModel
    author: string
    reference: string
    rate: number
    key: string

    get leftField() {
        return new Value({ value: this.rate, label: "valutazione" })
    }

    get middleField() {
        console.log('getting middleField', this.reference)
        return new Value({ value: this.reference, label: "giudizio" })
    }

    get rightField() {
        return new Value({ value: this.date.formatDate(), label: "data" })
    }


    initialize(args) {
        Object.assign(this, args)
        this.date = new Date(args.date) ? new DateModel(new Date(this.date)) : new DateModel(new Date())
        console.log('this is date',this.date)
        return this
    }
    serialize() {
        return { "key": this.key, "author": this.author, "reference": this.reference, "rate": this.rate, "date": this.date.formatFullDate() }
    }
}