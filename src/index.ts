interface ApiResponse {
    value?: string,
    status: number
}

export default class KiwiDB {
    private url: string;
    private Authorization: string;

    constructor (url: string, apiToken: string) {
        this.url = url.endsWith("/") ? url : url + "/"
        this.url += "db/"

        this.Authorization = `Bearer ${apiToken}`
    }

    async get (key: string): Promise<ApiResponse> {
        const req = await fetch(this.url + key, {
            method: "GET",
            headers: {
                'Authorization': this.Authorization
            }
        })

        return {
            value: await req.text(),
            status: req.status
        }
    }

    async set (key: string, value: string): Promise<ApiResponse> {
        const req = await fetch (this.url + key, { 
            method: "POST",
            body: JSON.stringify({ value }),
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': this.Authorization
            }
        });

        return {
            status: req.status
        }
    }

    async delete (key: string): Promise<ApiResponse> {
        const req = await fetch (this.url + key, {
            method: "DELETE",
            headers: {
                'Authorization': this.Authorization,
            }
        })

        return {
            status: req.status
        }
    }
}