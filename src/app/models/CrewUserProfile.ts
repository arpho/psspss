import { UserModel } from "../modules/user/models/userModel";

export enum UserKInd {
    worker = 1,
    enterprise
}

export class CrewUserprofile extends UserModel {

type:UserKInd
categories
}