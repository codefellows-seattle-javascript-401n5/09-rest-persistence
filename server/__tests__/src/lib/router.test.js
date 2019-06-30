"use strict";

const superagent = require("superagent");
require("../../../src/api/api");
const app = require("../../../src/app.js");

describe("app", () => {
  beforeAll(() => {
    app.start(3300);
  });

  afterAll(() => {
    app.stop();
  });

  it("GET, test for 404(not found) for valid requests made with an ID that was not found", () => {
    let obj = {
      id: 33,
      title: "Fred",
      content: "this is content"
    };
    return superagent
      .post("http://localhost:3300/api/v1/notes")
      .send(obj)
      .then(data => {
        let data = req.body.data;
        console.log(data);
        return superagent
          .get(`http://localhost:3300/api/v1/notes?id=${data}`)
          .then(data => {
            console.log(data);
            expect(req.body.data).toEqual("fdsa");
          });
      });
  });
});

// describe("Router", () => {
//   it("registers routes of multiple types", () => {
//     router.post("/api/v1/notes", () => true);
//     expect(router.routes.GET["/api/v1/notes"]).toBeDefined();

//     const mockNote = new Notes({ title: "fake", content: "fake" });
//     const id = mockNote.id;
//     mockNote.save();
//   });

//   it("can create multiple routes of the same type", () => {
//     router.routes.GET = {};
//     router.get("/a", () => true);
//     router.get("/b", () => true);
//     router.get("/c", () => true);
//     expect(Object.keys(router.routes.GET).length).toEqual(3);
//   });

//   it("can route get requests", () => {
//     let expected = "get/test";
//     router.get("/test", () => expected);
//     let req = { method: "GET", url: "http://localhost/test?john=bald" };
//     let res = {};
//     return router
//       .route(req, res)
//       .then(result => expect(result).toEqual(expected));
//   });
// });
