import ormService from "./ormService";
import { IPost } from '../interface/post';

export default class PostService extends ormService {
    async getPost() {
        const repo = await this.getRepository('Post');
        return await repo.createQueryBuilder("post").getMany();
    }

    async setNewPost(iPost: IPost) {
        const postRepo = await this.getRepository('Post');

        const insert = await postRepo.save({
                subject: iPost.subject,
                content: iPost.content,
                adminIdx: {idx: iPost.adminIdx},
                schoolIdx: {idx: iPost.schoolIdx}
            });

        console.log(insert);
        return insert;
    }

    async modifyPost(iPost: IPost) {
        const postRepo = await this.getRepository('Post');

        const insert = await postRepo.save({
                idx: iPost.idx,
                subject: iPost.subject,
                content: iPost.content,
                adminIdx: {idx: iPost.adminIdx},
                schoolIdx: {idx: iPost.schoolIdx}
            });

        console.log(insert);
        return insert;
    }

    async deletePost(idx: number | string) {
        const postRepo = await this.getRepository('Post');
        
        const remove = await postRepo.delete({idx: idx});

        return remove;
    }
}

