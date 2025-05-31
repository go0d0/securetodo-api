const request = require("supertest");
const app = require("../aplikasi");
const db = require("../db_connection/db_test")

beforeAll(async () => {
  await db.query("Delete from pengguna");

});

afterAll(async () => {
  await db.query("delete from pengguna")
	await db.end();
});

describe ("test crud", () => {
  let userId;
  test("Post test", async ()=> {
    const res = await request(app)
    .post("/identity/daftar")
    .send({username:"jaki", password:"jaki"})
    
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe("jaki");
    userId=res.body.id;
  })
  test("Get test", async ()=> {
    const res = await request(app).get("/identity/login");
    expect(Array.isArray(res.body)).toBe(true);
  })
  
  test("Update test", async () => {
    const res = await request(app)
    .put(`/identity/login/${userId}`)
    .send({username :"Jakiro", password:"jaki"})
    
    expect(res.body.username).toBe("Jakiro");
  })
  
  test("Delete test", async () => {
    const res =await request(app).delete(`/identity/login/${userId}`)
    expect(res.body.message).toBe("data berhasil dihapus");
    
  })
})
