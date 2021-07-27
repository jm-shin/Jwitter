import chaiHttp from "chai-http";
import chai from 'chai';
import server from '../app.js';
const should = chai.should();

chai.use(chaiHttp);

describe('tweet router test', function() {
    //GET
    describe('GET request on /', function (){
        it('should return tweet list', function (done) {
            chai.request(server)
                .get('/tweets')
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('GET request on /:id', () => {
        it('should return tweet by id',  (done) => {
            const compareData = {
                "id": "1",
                "text": "화이팅!",
                "name": "Bob",
                "username": "bob",
                "url": "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
            }
            chai.request(server)
                .get('/tweets/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.id.should.equal(compareData.id);
                    res.body.text.should.equal(compareData.text);
                    res.body.name.should.equal(compareData.name);
                    res.body.username.should.equal(compareData.username);
                    res.body.url.should.equal(compareData.url);
                    done();
                })
        });
    });

    //POST
    describe('POST request on /', () => {
        it('should return created tweet',  (done) => {
            const tweet = {
                text: '내용 3글자 이상',
                name: 'jerry',
                username: 'jerry'
            };
            chai.request(server)
                .post('/tweets')
                .send(tweet)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.text.should.equal(tweet.text);
                    res.body.name.should.equal(tweet.name);
                    res.body.username.should.equal(tweet.username);
                    done();
                });
        });
    });

    //PUT
    describe('PUT request on /', () => {
        it('should return updated tweet',  (done) => {
            let tweet = {
                text: '텍스트 내용'
            };
            chai.request(server)
                .put('/tweets/1')
                .send(tweet)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.text.should.equal('텍스트 내용');
                    done();
                });
        });
    });

    //DELETE
    describe('DELETE request on /', () => {
        it('should return deleted userId',  (done) => {
            chai.request(server)
                .delete('/tweets/2')
                .end((err, res) => {
                    res.should.have.status(204);
                    done();
                });
        });
    });
});