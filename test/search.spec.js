

let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;
chai.use(chaiHttp);

//test url
const url = "https://api.github.com/search/repositories?q=topic:vue";

//test get method
describe("get github repositories: ", () => {
  it("should get github repositories", (done) => {
    chai
      .request(url)
      .get("repositories")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});

