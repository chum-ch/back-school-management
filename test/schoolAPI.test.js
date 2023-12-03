require('dotenv');
const chai = require('chai');
const server = require('../server');

const { assert } = chai;
const { describe, it } = require('mocha');
chai.use(require('chai-http'));

describe('Test employee upload template', () => {
  it('should list schools.', (done) => {
    chai.request(server)
      .get('/schools')
      .end((err, res) => {
        assert.typeOf(res.body, 'array');
        done();
      });
  });
  // it('should get data school', (done) => {
  //   chai.request(server)
  //     .get(`/schools/${process.env.SCHOOL_ID}`)
  //     .end((err, res) => {
  //       assert.typeOf(res.body, 'object');
  //       assert.equal(res.body.SCHOOLS_ID.split(':')[0], 'schools');
  //       done();
  //     });
  // });
  // it('should update name of school', (done) => {
  //   chai.request(server)
  //     .put(`/schools/${process.env.SCHOOL_ID}`)
  //     .send(
  //       {
  //         Name: 'International School',
  //       },
  //     )
  //     .end((err, res) => {
  //       console.log(process.env.SCHOOL_ID);
  //       assert.typeOf(res.body, 'object');
  //       assert.equal(res.body.SCHOOLS_ID, process.env.SCHOOL_ID);
  //       assert.notEqual(res.body.Name, 'Testing');
  //       done();
  //     });
  // });
  // it('should  school', (done) => {
  //   chai.request(server)
  //     .get(`/schools/${process.env.SCHOOL_ID}`)
  //     .end((err, res) => {
  //       assert.typeOf(res.body, 'object');
  //       assert.equal(res.body.SCHOOLS_ID.split(':')[0], 'schools');
  //       done();
  //     });
  // });

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
