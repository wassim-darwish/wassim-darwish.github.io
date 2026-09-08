// Pageview tracking.
//
// REACT_APP_ANALYTICS_URL points at the Cloudflare Worker in /worker, which
// proxies GoatCounter from our own origin so privacy blockers don't drop the
// request. When it is unset we fall back to hitting GoatCounter directly,
// which works but is blocked for a slice of visitors.

const GOATCOUNTER = "https://wassim-darwish.goatcounter.com";

const PROXY = process.env.REACT_APP_ANALYTICS_URL?.replace(/\/$/, "");

export const TOTAL_URL = PROXY
  ? `${PROXY}/count`
  : `${GOATCOUNTER}/counter/TOTAL.json`;

export function recordVisit(): void {
  // Mirrors what count.js skips, so local development never reaches the
  // production stats.
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname)) {
    return;
  }

  const path = window.location.pathname || "/";
  const ref = document.referrer;

  if (PROXY) {
    const body = JSON.stringify({ path, ref });

    // keepalive lets the request outlive a visitor who navigates away
    // immediately; a failure here must never surface to the user.
    fetch(`${PROXY}/hit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
    return;
  }

  const url = new URL(`${GOATCOUNTER}/count`);
  url.searchParams.set("p", path);
  if (ref) url.searchParams.set("r", ref);
  new Image().src = url.toString();
}
