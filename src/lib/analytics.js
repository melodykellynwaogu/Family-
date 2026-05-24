const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let initialized = false
let lastTrackedPath = ''

export function initAnalytics() {
  if (!MEASUREMENT_ID || initialized || typeof window === 'undefined') {
    return
  }

  const scriptId = `ga-${MEASUREMENT_ID}`
  const existingScript = document.getElementById(scriptId)

  if (!existingScript) {
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })

  initialized = true
}

export function trackPageView(path) {
  if (!MEASUREMENT_ID || typeof window === 'undefined') {
    return
  }

  if (!initialized) {
    initAnalytics()
  }

  if (path === lastTrackedPath || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })

  lastTrackedPath = path
}
