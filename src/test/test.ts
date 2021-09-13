import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../app';

describe("Index Test", () => {
    it('학교 등록 테스트', async function () {
        const res = await request(app)
            .post('/school')
            .send(schoolPost);
        expect(res.status).to.equal(200);
    });


    it('학교 등록 테스트', async function () {
        const res = await request(app)
            .post('/school')
            .send(schoolPost);
        expect(res.status).to.equal(200);
    });

    it('학교 소식 등록 테스트', async function () {
        const res = await request(app)
            .post('/posts')
            .send(posts);
        expect(res.status).to.equal(200);
    });
});


const schoolPost = {
    name: '버섯초등학교',
    region: '강원',
    adminIdx: 4
}

const posts = {
    adminIdx: 4,
    subject: '소식 테스트 4',
    content: '소식 테스트 4의 본문입니다.'
}





