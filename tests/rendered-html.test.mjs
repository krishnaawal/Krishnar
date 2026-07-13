import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Krishna Rawal/);
  assert.match(html, /Designing digital/);
  assert.match(html, /Frontend development/);
  assert.match(html, /Artree Nepal/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("renders the real projects page", async () => {
  const response = await render("/projects");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const project of ["Artree Nepal", "Plumeria", "GharBazaar", "ShoePasal", "Pokhara Pizza"]) {
    assert.match(html, new RegExp(project));
  }
  assert.match(html, /Things I&#x27;ve/);
});
