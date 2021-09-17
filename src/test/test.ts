import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../app';
import { createConnection } from "typeorm";




describe("api test", () => {

    /*it('학교 등록 테스트', async function () {
        const res = await request(app)
            .post('/school')
            .send(schoolPost);
        expect(res.status).to.equal(200);
    });*/
    it('학교 소식 등록 테스트', async function () {

        const res = await request(app)
            .post('/post')
            .send(posts);
        expect(res.status).to.equal(400);

    });

    /*it('구독 등록 테스트', async function () {
        const res = await request(app)
            .post('/subs')
            .send(subs);
        expect(res.status).to.equal(200);
    });*/

});


const schoolPost = {
    name: '버섯초등학교',
    region: '강원',
    adminIdx: 4
}
const posts = {
    adminIdx: 99,
    subject: '버섯초등학교 소식 2',
    content: '버섯초등학교 소식 2의 본문입니다.'
};


const subs = {
    studentIdx: 1,
    schoolIdx: 10
}



