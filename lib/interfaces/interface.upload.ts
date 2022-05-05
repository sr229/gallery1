import { ObjectType } from "deta/dist/types/types/basic";

export interface IUploadOptions extends ObjectType {
    fileURL: string;
    author: string;
    caption: string;
    description: string;
    tags: string[];
}