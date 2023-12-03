require('dotenv');
const chai = require('chai');
const axios = require('axios');
const server = require('../server');
const { expect } = chai;
const { assert } = chai;
const { describe, it } = require('mocha');
chai.use(require('chai-http'));

describe('Test employee upload template', function () {
  it('should list schools.', function (done) {
    chai.request(server)
      .get(`/schools`)
      .end(function (err, res) {
        assert.typeOf(res.body, 'array');
        done();
      });
  });
  it('should get detais school', function (done) {
    chai.request(server)
      .get(`/schools/${process.env.SCHOOL_ID}`)
      .end(function (err, res) {
        assert.typeOf(res.body, 'object');
        assert.equal(res.body.SCHOOLS_ID.split(':')[0], 'schools')
        done();
      });
  })
  it('should update name of school', function (done) {
    chai.request(server)
      .put(`/schools/${process.env.SCHOOL_ID}`)
      .send(
        {
          Name: 'International School'
        }
      )
      .end(function (err, res) {
        console.log(process.env.SCHOOL_ID);
        assert.typeOf(res.body, 'object');
        assert.equal(res.body.SCHOOLS_ID, process.env.SCHOOL_ID);
        assert.notEqual(res.body.Name, 'Testing')
        done();
      });
  })
  it('should  school', function (done) {
    chai.request(server)
      .get(`/schools/${process.env.SCHOOL_ID}`)
      .end(function (err, res) {
        assert.typeOf(res.body, 'object');
        assert.equal(res.body.SCHOOLS_ID.split(':')[0], 'schools')
        done();
      });
  })

  // it('Should list schools.', async function () {
  //   const listSchools = await axios.get(`${server}/schools`);
  //   assert.typeOf(listSchools.data, 'array')
  // });
  // it('Should fail list schools because wrong with endpoint.', async function () {
  //   try {
  //     await axios.get(`${server}/schoolss`);
  //     expect.fail('Something wrong with request.')
  //   } catch (error) {
  //     assert.equal(error.response.status, 404)
  //   }
  // });
});

