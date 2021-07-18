import { ListableItemInterface } from "../../dynamic-form/models/listableItemInterface";
import { Value } from "../../item/models/value";
import { DateModel } from "../../user/models/birthDateModel";

export class RatingModel implements ListableItemInterface {
    date: DateModel
    author: string
    review: string
    rate: number=0 
    key: string

    get leftField() {
        return new Value({ value: this.rate, label: "valutazione" })
    }

    get middleField() {
        return new Value({ value: this.review, label: "giudizio" })
    }

    get rightField() {
        return new Value({ value: this.date.formatDate(), label: "data" })
    }


    initialize(args) {
        Object.assign(this, args)
        this.date = new DateModel(new Date(args.date))
        if (!this.date.day){
            this.date = new DateModel(new Date())
        }
        return this
    }
    serialize() {
        return { "key": this.key||'', "author": this.author||'', "review": this.review||'', "rate": this.rate||0, "date": this.date.formatFullDate() }
    }
}