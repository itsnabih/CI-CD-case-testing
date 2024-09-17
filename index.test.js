const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
describe("GET /", () => {
  it("should return Hello World", async () => {
    const rest = await request(app).get("/");
    expect(rest.text).toBe("Hello World");
    expect(rest.statusCode).toBe(200);
  });
});

app.get("/health", (req, res) => {
  res.send("halo, the endpoint is healthy!!!! (second update)");
});
describe("GET /health", () => {
  it("should return healthy", async () => {
    const rest = await request(app).get("/health");
    expect(rest.text).toBe("halo, the endpoint is healthy!!!! (second update)");
    expect(rest.statusCode).toBe(200);
  });
});

app.get("/ci-cd", (req, res) => {
  res.send("ci-cd is working fine!!");
});

describe("GET /ci-cd", () => {
  it("should return ci-cd page working", async () => {
    const rest = await request(app).get("/ci-cd");
    expect(rest.text).toBe("ci-cd is working fine!!");
    expect(rest.statusCode).toBe(200);
  });
});
