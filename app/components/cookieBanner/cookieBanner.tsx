import { useEffect, useState } from 'react';
import { Button } from '../button/button';

const STORAGE_KEY = 'cookie_consent';
const CF_TOKEN = import.meta.env.VITE_CF_ANALYTICS_TOKEN;

function loadAnalytics() {
  if (!CF_TOKEN || document.getElementById('cf-analytics')) return;
  const script = document.createElement('script');
  script.id = 'cf-analytics';
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
  document.body.appendChild(script);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!CF_TOKEN) return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === 'accepted') {
      loadAnalytics();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadAnalytics();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 mx-auto w-max max-w-xl z-50 flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl px-6 py-4 shadow-lg dark:bg-gray-950 dark:border-neutral-800">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        We use analytics cookies to understand how you use our site. <a href="/legal/privacy-policy" className="underline">Privacy Policy</a>
      </p>
      <div className="flex gap-2 shrink-0">
        <Button variant="secondary" onClick={decline}>Decline</Button>
        <Button variant="primary" onClick={accept}>Accept</Button>
      </div>
    </div>
  );
}
