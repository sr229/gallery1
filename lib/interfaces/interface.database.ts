import Base from "deta/dist/types/base";
import { FetchOptions } from "deta/dist/types/types/base/request";
import { FetchResponse, GetResponse, PutManyResponse } from "deta/dist/types/types/base/response";
import { CompositeType, ObjectType } from "deta/dist/types/types/basic";

export interface IDatabase {
    db: Base;
    post(key: string, data: ObjectType) : Promise<ObjectType>;
    get(key: string) : Promise<GetResponse>;
    update(key:string, data: ObjectType): Promise<null>;
    delete(key: string): Promise<null>;
    putMany(data: Array<ObjectType>) : Promise<PutManyResponse>;
    query(options: CompositeType, queryOptions: FetchOptions): Promise<FetchResponse>;
}