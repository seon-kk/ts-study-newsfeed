import { Request } from 'express';
import { School } from '../entity/school';
import { ISchool } from '../interface/school';
import ormService from "./ormService";


export default class SchoolService extends ormService {

    async getSchoolList() {
        const repo = await this.getRepository('School');
        return await repo.createQueryBuilder("school").getMany();
    }

    async setNewSchool(iSchool: ISchool) {
        const schoolRepo = await this.getConnection();

        await schoolRepo.createQueryBuilder().insert().into(School)
            .values({
                adminIdx: {idx: iSchool.adminIdx},
                name: iSchool.name,
                region: iSchool.region
            }).execute();

    }

}

