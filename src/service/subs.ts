import ormService from "./ormService";
import { ISubs } from '../interface/subs';
import { IsNull } from "typeorm";
import { isNull } from "util";

export default class SubsService extends ormService {

    async getSubsByStudent(studentIdx: number | string) {
        const repo = await this.getRepository('Subs');
        const result = await repo.find({
            where: {
                studentIdx: studentIdx,
                endDate: IsNull()
            }
        });

        return result;
    }

    async getNowSubs(iSubs: ISubs) {
        const repo = await this.getRepository('Subs');
        const result = await repo.find({
            where: {
                studentIdx: iSubs.studentIdx,
                schoolIdx: iSubs.schoolIdx,
                endDate: IsNull()
            }
        });

        return result;
    }

    async setNewSubs(iSubs: ISubs) {
        const repo = await this.getRepository('Subs');

        const insert = await repo.save({
                studentIdx: {idx: iSubs.studentIdx},
                schoolIdx: {idx: iSubs.schoolIdx},
                startDate: iSubs.startDate
            });

        console.log(insert);
        return insert;
    }

    async deleteSubs(idx: number | string) {
        const repo = await this.getRepository('Subs');
        
        const remove = await repo.delete({idx: idx});

        return remove;
    }

}

