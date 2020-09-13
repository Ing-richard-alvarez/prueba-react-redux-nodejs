const superTest = require('supertest');

var 
    chai = require('chai'),
    chaiHttp = require('chai-http')
;

const expect  = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

const apiUrl = 'http://127.0.0.1:3080';
const requestUrlTest = superTest(apiUrl);
const chaiRequest = chai.request(apiUrl);

describe('Message list', () => {

    it('Creating message with supertest', function () {
        
        requestUrlTest
            .post('/api/message/create')
            .set('Content-Type', 'application/json')
            .send({
                "index":1,
                "message":"This is a message test"
            })
            .then(function(res){
                // console.log(res.status);
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                res.body.should.have.property('msg')
            })
            .catch(function(err){
                throw err;
            })
        ;
        
    });     
    

    it('verify message list with supertest', async () => {

        let response = await requestUrlTest
            .get('/api/message')
            .then( response => {
                console.log(response.body.data);
                return response;
            })
        ;
        expect(response.status, 'Status Successful').to.equal(200);
        expect(response.body.data.length, 'Are there messages?').to.greaterThan(0);

    });

    it('Creating message   with chai',function() {

        chaiRequest
            .post('/api/message/create')
            .send({
                "index":1,
                "message":"This is a message test"
            })
            .then(function(res){

                // console.log(res.body);
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                res.body.should.have.property('msg')
        
            })
            .catch(function(err){
                throw err;
            })
        ;

    });

    it('verify message list  with chai',function(done) {
       
        chaiRequest
            .get('/api/message')
            .end(function(err, res) {
                // console.log(typeof res.body.data);
                if(err) return console.log( res.body.data);
                should.not.exist(err);
                should.exist(res);
                res.body.data.should.be.an('array');

                expect(res).to.have.status(200);
                expect(res.body.data.length).greaterThan(0);

                done();

            })
        ;
        

    });



});