import { serve } from "https://deno.land/std/http/mod.ts";

async function reqHandler(req: Request) {
  await logHttpRequest(req.clone());
  const j=await req.json();
  return new Response(j.a);
}

async function logHttpRequest(r:Request) {
  console.log(new Date()+' New HTTP request');
  console.log(`${r.method} ${r.url}`);
  console.log(r.headers);
  console.log(await r.text());
}

serve(reqHandler, { port: 8000 });