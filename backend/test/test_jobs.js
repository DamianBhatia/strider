const chai = require('chai')
const request = require('supertest')
const chaiHttp = require("chai-http")
const expect = chai.expect
const server = require("../server.js");

// chai.use(chaiHttp)

// UNIT TESTING JOBS API

describe("Jobs API Unit Test", () => {
    it('should retrieve 3 jobs from the jobs database as JSON', done => {
        request(server).get('/jobs/get')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => err ? done(err) : done())
    })
})