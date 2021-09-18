const chai = require('chai')
const chaiHttp = require("chai-http")
const expect = chai.expect
const baseUrl = "localhost:5000"

chai.use(chaiHttp)

// UNIT TESTING JOBS API

describe("Jobs API Unit Test", () => {
    it('retrieve 3 jobs from the jobs database as JSON', done => {
        chai.request(baseUrl)
        .get('/jobs/get')
        .end((err, res) => {
            expect(res).to.have.status(200)
            done()
        })
    })
})