/**
 * GoatCounter proxy.
 *
 * Requests to *.goatcounter.com are on the EasyPrivacy blocklist, so uBlock
 * Origin, AdGuard and Brave Shields drop them before they leave the browser.
 * The portfolio talks to this Worker on its own origin instead, and the Worker
 * talks to GoatCounter server-side where no blocker is involved.
 *
 * It also keeps the GoatCounter API token out of the client bundle: the token
 * lives only as a Worker secret.
 *
 *   POST /hit    record a pageview  -> GoatCounter POST /api/v0/count
 *   GET  /total  site visitor total -> GoatCounter GET  /counter/TOTAL.json
 *
 * Deploy:
 *   npx wrangler secret put GOATCOUNTER_TOKEN
 *   npx wrangler deploy
 */

const GOATCOUNTER = "https://wassim-darwish.goatcounter.com/api/v0";

const ALLOWED_ORIGINS = [
  "https://wassim-darwish.github.io",
  "http://localhost:3000",
];

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export default {
  async fetch(request, env) {
    const headers = corsHeaders(request.headers.get("Origin") ?? "");
    const { pathname } = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (pathname === "/total" && request.method === "GET") {
      const res = await fetch(`${GOATCOUNTER}/counter/TOTAL.json`, {
        cf: { cacheTtl: 300, cacheEverything: true },
      });
      return new Response(await res.text(), {
        status: res.status,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    if (pathname === "/hit" && request.method === "POST") {
      if (!env.GOATCOUNTER_TOKEN) {
        return new Response(null, { status: 503, headers });
      }

      let payload;
      try {
        payload = await request.json();
      } catch {
        return new Response(null, { status: 400, headers });
      }

      // Forwarding the real IP and User-Agent is what lets GoatCounter derive
      // its session hash, and so tell repeat visits apart from new visitors.
      // Without them the API requires no_sessions and every hit counts as a
      // separate person.
      const hit = {
        path: typeof payload?.path === "string" ? payload.path : "/",
        ref: typeof payload?.ref === "string" ? payload.ref : "",
        ip: request.headers.get("CF-Connecting-IP") ?? "",
        user_agent: request.headers.get("User-Agent") ?? "",
      };

      const res = await fetch(`${GOATCOUNTER}/api/v0/count`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.GOATCOUNTER_TOKEN}`,
        },
        body: JSON.stringify({ no_sessions: false, hits: [hit] }),
      });

      return new Response(null, { status: res.ok ? 204 : 502, headers });
    }

    return new Response(null, { status: 404, headers });
  },
};
