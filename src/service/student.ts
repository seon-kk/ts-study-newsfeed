import ormService from "./ormService";

export default class StudentService extends ormService {

    async getStudentList() {
        const repo = await this.getRepository('Student');
        return await repo.createQueryBuilder("student").getMany();
    }

}

