import ormService from "./ormService";

export default class AdminService extends ormService {

    async getAdminList() {
        const repo = await this.getRepository('Admin');
        return await repo.createQueryBuilder("admin").getMany();
    }

    async getAdminByIdx(idx: number|string) {
        const repo = await this.getRepository('Admin');

        const result = await repo.createQueryBuilder("admin")
            .where("admin.idx = :idx", { idx: idx} ).getMany();
        
        return result;
    }
}

