import chai from "chai";
import chaiHttp from "chai-http";
import app from "./app.mjs";

chai.use(chaiHttp);
const expect = chai.expect;

// describe("User Sync API", () => {
//   describe("POST /user/sync_user", () => {
//     it("should sync user with firebase", async () => {
//       const user = {
//         email:"lahiruhewagama98@gmail.com"
//       };
//       const request = chai.request(app);
//       const res = await request.post("/user/sync_user").send(user);

//       expect(res).to.have.status(200);

//     });
  
//   });

// });


describe("Get all Users API", () => {
  describe("GET /user", () => {
    it("should return all users", async () => {
      
      const request = chai.request(app);
      const res = await request.get("/user").timeout(5000); // Adjust timeout value as needed;

      expect(res).to.have.status(200);

    });
  
  });

});