const request = require('supertest');

const app = require('../src/index');

describe("Calling /admin with GET", () => {
    test("It should respond with a 200 status code", async () =>{
        const response = await request(app).get("/admin").send();
        expect(response.status).toBe(200);
    });

    test("It should respond with an array", async ()=>{
        const response = await request(app).get("/admin").send();
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe("Calling / with GET", () => {
    test("It should respond with a 200 status code", async () =>{
        const response = await request(app).get("/").send();
        expect(response.status).toBe(200);
    });

    test("It should respond with an array", async ()=>{
        const response = await request(app).get("/").send();
        expect(response.body).toBeInstanceOf(Array);
    });

    

});
