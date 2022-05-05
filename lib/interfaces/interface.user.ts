import { ObjectType } from "deta/dist/types/types/basic";
import { IUploadOptions } from "./interface.upload";

export interface IUser extends ObjectType {
    name: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    posts: Array<IUploadOptions>
}