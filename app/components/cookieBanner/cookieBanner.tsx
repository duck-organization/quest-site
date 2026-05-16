import { useEffect, useState } from 'react';
import { Button } from '../button/button';

const STORAGE_KEY = 'cookie_consent';

function loadAnalytics(token: string) {
  if (document.getElementById('cf-analytics')) return;
  const script = document.createElement('script');
  script.id = 'cf-analytics';
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token }));
  document.body.appendChild(script);
}

export function CookieBanner({ cfToken }: { cfToken: string | null }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cfToken) return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'accepted') {
      loadAnalytics(cfToken);
    } else if (!consent) {
      setVisible(true);
    }

    const handler = () => setVisible(true);
    window.addEventListener('show-cookie-banner', handler);
    return () => window.removeEventListener('show-cookie-banner', handler);
  }, [cfToken]);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadAnalytics(cfToken!);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 mx-auto w-max max-w-xl z-50 flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl px-6 py-4 shadow-lg">
      <p className="text-sm text-neutral-600">
        We use analytics cookies to understand how you use our site. <a href="/legal/privacy-policy" className="underline">Privacy Policy</a>
      </p>
      <div className="flex gap-2 shrink-0">
        <Button variant="secondary" onClick={decline}>Decline</Button>
        <Button variant="primary" onClick={accept}>Accept</Button>
      </div>
    </div>
  );
}
