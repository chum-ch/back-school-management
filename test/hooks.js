require('dotenv');
const axios = require('axios');
const chai = require('chai');

const server = ' http://localhost:3003';
const { expect } = chai;
const { assert } = chai;
const { describe, it } = require('mocha');
chai.use(require('chai-http'));

exports.mochaHooks = {
  beforeAll(done) {
    axios({
      method: 'post',
      url: `${server}/schools`,
      data: {
        Name: 'Testing',
      },
    }).then(async (response) => {
      console.log('da', response.data);
      process.env.SCHOOL_ID = response.data.SCHOOLS_ID;
      done();
    }).catch((error) => {
      console.log('login failed: ', error);
      done();
    });

    // suiteSetup('Create necessary resources', () => {
    // chai.request(server)
    //     .post(`/schools`)
    //     .send({ Name: 'Testing' })
    //     .end(function (err, res) {
    //         console.log('ddfdsfas', res);
    //         process.env.SCHOOL_ID = response.data.SCHOOLS_ID
    //         assert.typeOf(res.body, 'object');
    //         assert.equal(res.body.SCHOOLS_ID.split(':')[0], 'schools')
    //         done()
    //     });
    // })
  },
  afterAll(done) {
    // Delete an employee by employerId
    // axios({
    //     method: 'delete',
    //     url: `${server}/schools/${process.env.SCHOOL_ID}`,
    // }).then(async function (response) {
    //     console.log('res', response.data);
    //     done();
    // }).catch(function (error) {
    //     console.log("delete resources failed: ", error);
    //     done();
    // });
    // suiteTeardown('Could delete resources below', () => {
    //     it('should delete school', function (done) {
    //         chai.request(server)
    //             .delete(`/schools/${process.env.SCHOOL_ID}`)
    //             .end(function (err, res) {
    //                 assert.typeOf(res.body, 'object');
    //                 done();
    //             });
    //     })
    // })
    done();
  },
};
