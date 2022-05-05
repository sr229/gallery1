import { Deta } from "deta";
import Base from "deta/dist/types/base";
import { FetchOptions } from "deta/dist/types/types/base/request";
import { CompositeType, ObjectType } from "deta/dist/types/types/basic";
import { IDatabase } from "./interfaces/interface.database";
const deta = Deta(process.env.DETA_PROJECT_KEY?.toString());

export default class Database implements IDatabase {
    db: Base;

    constructor(dbName: string) {
        this.db = deta.Base(dbName);
    }

    async post(key: string, data: ObjectType) {
        return await this.db.insert(data, key);
    }

    async get(key: string) {
        return await this.db.get(key);
    }

    async update(key:string, data: ObjectType) {
        return await this.db.update(data, key);
    }

    async delete(key: string) {
        return await this.db.delete(key);
    }

    async putMany(data: ObjectType[]) {
        return await this.db.putMany(data);
    }

    async query(options: CompositeType, queryOptions: FetchOptions) {
        return await this.db.fetch(options, queryOptions);
    }
}