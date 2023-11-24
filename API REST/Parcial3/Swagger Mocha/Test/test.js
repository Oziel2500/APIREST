const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let app = 'http://localhost:3000';

const expect = chai.expect;

describe("Prueba la ruta de usuarios", () => {
    it("Prueba metodo get", (done) => {
        chai.request(app)
            .get("/usuariosx")
            .end((err, res) => {
                expect(err).to.be.null;
               // expect(res).to.have.status(200);
                done();
            })
    })
})