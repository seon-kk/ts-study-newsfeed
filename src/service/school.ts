import { ISchool } from '../interface/school';
import ormService from "./ormService";


export default class SchoolService extends ormService {

    async getSchoolList() {
        const repo = await this.getRepository('School');
        return await repo.createQueryBuilder("school").getMany();
    }

    async getSchoolByIdx(idx: number) {
        const repo = await this.getRepository('School');
        return await repo.find({idx: idx});
    }

    async getSchoolByAdminIdx(idx: number) {
        const repo = await this.getRepository('School');
        const result = await repo.createQueryBuilder('school')
            .where("school.adminIdx = :idx", {idx:idx}).getRawOne();
        return result;
    }

    async setNewSchool(iSchool: ISchool) {
        const schoolRepo = await this.getRepository('School');

        const insert = await schoolRepo.save({
                adminIdx: {idx: iSchool.adminIdx},
                name: iSchool.name,
                region: iSchool.region
            });

        return insert;
    }

}

