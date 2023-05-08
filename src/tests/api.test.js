const exp = require("constants")
const request = require("supertest")
const baseURL = "http://localhost:5500"

describe("GET /teams", ()=>{
    const team = {
        "name": "QUCA",
        "location": "NY",
        "id": "324-gfd-645-gfgf",
        "leagues": ["EYCL", "NYCL"]
    }

    beforeAll(async()=>{
        await request(baseURL).post('/teams').send(team)
    })
    it("should return 200", async() => {
        const response = await request(baseURL).get("/teams")
        console.log(response.body)
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2)
    })

    
})

describe("POST /teams", ()=>{
    const team = {
        "name": "QUA-WC",
        "location": "NY",
        "id": "324-sads-645-gfgf",
        "leagues": ["EYCL", "NYNCL"]
    }
    it("should add an item to the teams array", async()=>{
        const response = await request(baseURL).post("/teams").send(team)
        expect(response.statusCode).toBe(201)
        expect(response.body).toStrictEqual(team)

    })
})