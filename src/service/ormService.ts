import { getConnection } from "typeorm";

export default class ormService {

    async getRepository(repository: string) {
        return await getConnection().getRepository(repository);
    }

    async getConnection() {
        return await getConnection();
    }

    /*
    async getQuery() {
        return await getConnection().getRepository('Admin').createQueryBuilder("admin");
    }
    */
}