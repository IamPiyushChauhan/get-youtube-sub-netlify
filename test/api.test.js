const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

// Describe the test suite
describe('API Tests', () => {

  // Test the GET /subscribers/:id endpoint
  describe('GET /subscribers/:id', () => {
    it('should return details of a specific subscriber with valid ID', (done) => {
      chai.request('http://localhost:3000')
        .get('/subscribers/64a532000ceca518beae6')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object')
          res.body.should.have.property('message')
          done();
        });
    });
  });

 // Test the GET /subscribers/:id endpoint
  describe('GET /subscribers/:id', () => {
    it('should return details of a specific subscriber with valid ID', (done) => {
      chai.request('http://localhost:3000')
        .get('/subscribers/64a532000cec810a518beae6')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object')
          res.body.should.have.property('_id')
          res.body.should.have.property('name')
          res.body.should.have.property('subscribedChannel')
          res.body.should.have.property('subscribedDate')
          done();
        });
    });
  });

  // Test the GET /subscribers/names endpoint
  describe('GET /subscribers/names', () => {
    it('should return an array of subscriber names', (done) => {
      chai.request('http://localhost:3000')
        .get('/subscribers/names')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });

  // Test the GET /subscribers endpoint
  describe('GET /subscribers', () => {
    it('should return an array of all subscribers', (done) => {
      chai.request('http://localhost:3000')
        .get('/subscribers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });
});
