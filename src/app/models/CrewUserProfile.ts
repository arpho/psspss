
import { CategoryModel } from "../modules/categories/models/CategoryModel";
import { UserModel } from "../modules/user/models/userModel";
import { ReviewsModel } from "./reviewsModel";

export enum UserKind {
    worker = 1,
    enterprise
}

export class CrewUserprofileModel extends UserModel {

    type: UserKind
    picture: string
    categories: Array<CategoryModel>
    categorieId: Array<string>
    references: Array<ReviewsModel>

    instatiateCategories(categorieId: Array<string>) {
        if (categorieId) {
            const out = categorieId.map((key: string) => new CategoryModel(key))
            return out
        } else { return [] }
    }

    initialize(item) {
        super.initialize(item)
        this.categories = this.categories || this.instatiateCategories(item.categorieId)
        this.references = this.references.map(item => new ReviewsModel().initialize(item))
        return this
    }
    serializeReferences() {
        return this.references.map((item: ReviewsModel) => item.serialize())
    }

    serialize() {
        return { ...super.serialize(), type: this.type, references: this.serializeReferences(), picture: this.picture }
    }
}