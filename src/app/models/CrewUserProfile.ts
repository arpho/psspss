
import { CategoryModel } from "../modules/categories/models/CategoryModel";
import { Value } from "../modules/item/models/value";
import { DateModel } from "../modules/user/models/birthDateModel";
import { UserModel } from "../modules/user/models/userModel";
import { ReviewsModel } from "./reviewsModel";
import { ActivityFields } from './enumFields'
import { ItemServiceInterface } from "../modules/item/models/ItemServiceInterface";
import { CategoriesService } from "../modules/categories/services/categorie.service";
import { RatingModel } from "../modules/ratings/models/ratingModel";

export enum UserKind {
    worker = 1,
    enterprise
}



export class CrewUserprofileModel extends UserModel {

    constructor() {
        super()
        this.birthDate = new DateModel(new Date())
        this.skillsList = []
    }

    getunderTitleField() {
        return new Value({ label: "ruolo", value: this.crewRole })
    }

    getValue3() {
        return new Value({ label: "nascita:", value: this.birthDate.formatDate() })
    }

    isSkilled(key: string) {
        return this.skillsList.map((skill: CategoryModel) => skill.key).indexOf(key) > -1
    }

    middleFrontField(){
        return  (this.rate >0)? new Value({label:"⭐",value:`⭐ ${this.rate}`}): new Value({value:'',label:''})
    }

    setKey = (key: string) => {
        this.key = key
        return this
    }

    type: UserKind = 1
    picture: string = ''
    categories: Array<CategoryModel>
    categorieId: Array<string>
    references: Array<RatingModel>
    crewRole: string
    field: ActivityFields
    skillsList: Array<CategoryModel>
    skillsId: Array<string> = []// used to store skills id on db



    instatiateCategories(categorieId: Array<string>) {
        if (categorieId) {
            const out = categorieId.map((key: string) => new CategoryModel(key))
            return out
        } else { return [] }
    }
    getTitle() {
        return new Value({
            label: "title", value: this.title
        })
    }

    getNote() {
        return new Value({ label: "nota", value: "nota" })
    }

    async initializeSkills(service: CategoriesService) {
        this.skillsList = [] //reset array
        this?.skillsId.forEach((skill_id: string) => {
            service.fetchItem(skill_id, (skill: CategoryModel) => {
                this.skillsList.push(skill)
            })
        })

    }
    get rate() {
        const sum = this.references?.map((rev: RatingModel) => rev.rate).reduce((acc, value, index, arr) => {
            return acc + value
        }, 0)
        return sum / this.references.length ||0
    }


    initialize(item) {
        super.initialize(item)

        this.categories = this.categories || this.instatiateCategories(item.categorieId)
        this.references = this.references ? this.references.map(item => new RatingModel().initialize(item)) : []

        this.title = `${this.firstName} ${this.lastName}`
        return this
    }
    serializeReferences() {
        return this.references.map((item: RatingModel) => item.serialize())
    }

    serialize() {
        return { ...super.serialize(), type: this.type, references: this.serializeReferences(), picture: this.picture, crewRole: this.crewRole, field: this.field, skillsId: this.skillsList.map((item: CategoryModel) => item.key) }
    }
}