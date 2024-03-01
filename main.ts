import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 8000 });

console.log("Server is running on port 8000");

for await (const req of server) {
    const { headers } = req;
    const body = await req.text();

    console.log("Headers:", headers);
    console.log("Body:", body);
}

//serve((req: Request) => new Response("Hello World"));
