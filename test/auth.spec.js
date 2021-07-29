import chaiHttp from "chai-http";
import chai from 'chai';
import server from '../app.js';
const should = chai.should();

describe('POST /auth/login', () => {
    describe('성공시', () => {
        const user = {
            username: 'bob',
            password: '12345',
        }
        it('200을 응답한다', (done) => {
            chai.request(server)
                .post('/auth/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('실패시', () => {
       describe('5자 미만의 비밀번호 입력한 경우', () => {
           const notUser = {
               username: 'bob',
               password: '4444'
           }
           it('400을 응답한다 ',  (done) => {
                chai.request(server)
                    .post('/auth/login')
                    .send(notUser)
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.message.should.equal("password should be at least 5 characters");
                        done();
                    });
           });
       });
    });
});