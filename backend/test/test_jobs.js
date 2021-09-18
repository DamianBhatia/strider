const request = require('supertest')
const server = require("../server.js");

// UNIT TESTING JOBS API

describe("Jobs API Unit Test", () => {
    it('should retrieve 3 jobs from the jobs database as JSON', done => {
        request(server).get('/jobs/get')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => err ? done(err) : done())
    })
})