import KiwiDB from './index'
import fetchMock, { FetchMock } from 'jest-fetch-mock'
 
test("should create a KiwiDB object", () => {
    expect(new KiwiDB('test', 'test')).toBeInstanceOf(KiwiDB)
})

describe("Test of the http requests", () => {
    const db = new KiwiDB("http://localhost:3000/", "testtoken");

    test("the request return the correct content", async () => {
        fetchMock.mockOnce("testvalue")

        const res = await db.get("test")

        expect(res.value).toBe("testvalue")
        expect(res.status).toBe(200)
    })

    test("the request should contain the right headers", async () => {
        fetchMock.mockOnce(async req => {
            expect(req.headers.has("Authorization")).toBeTruthy();
            expect(req.headers.get("Authorization")?.startsWith("Bearer")).toBeTruthy();
            return ""
        })

        const res = await db.get("test")

        expect(res.status).toBe(200)
    })

    test("the request should contain a body", async () => {
        fetchMock.mockOnce(async req => {
            expect(JSON.parse(req.body?.toString() ?? "{}").value).toBe("testvalue")

            return ""
        })

        const res = await db.set("key", "testvalue")
        return ""
    })

    test("the request method should be DELETE request", async () => {
        fetchMock.mockOnce(async req => {
            expect(req.method).toBe("DELETE");

            return ""
        })

        const res = await db.delete("value")
        return ""
    })
})

