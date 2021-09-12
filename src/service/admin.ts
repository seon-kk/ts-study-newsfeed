import { getRepository} from "typeorm";
import { Admin } from "../entity/admin";

export default class adminService {

    adminRepo = getRepository(Admin);

    async getAdminList() {
        const adminList = await this.adminRepo.find();
        console.log(adminList);
    }

}

