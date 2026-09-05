'use client';

import { useEffect, useState } from 'react';

const storeUrls = {
  android: 'https://play.google.com/store/apps/details?id=com.choresnest',
};

type InviteStatus = 'loading' | 'fallback';

export interface InviteRedirectProps {
  slug: string;
}

export default function InviteRedirect({ slug }: InviteRedirectProps) {
  const [status, setStatus] = useState<InviteStatus>('loading');
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [webInviteUrl, setWebInviteUrl] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setWebInviteUrl(`${window.location.origin}/invite/${slug}`);
  }, [slug]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const appUrl = `com.choresnest://invite/${slug}`;
    let fallbackTimer: number | undefined;

    const cancelFallback = () => {
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
        fallbackTimer = undefined;
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelFallback();
      }
    };

    const onPageHide = () => {
      cancelFallback();
    };

    fallbackTimer = window.setTimeout(() => {
      setStatus('fallback');
      window.location.href = storeUrls.android;
    }, 1500);

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', onPageHide);

    window.location.href = appUrl;

    return () => {
      cancelFallback();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, [slug]);

  const handleCopyLink = async () => {
    if (!webInviteUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(webInviteUrl);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (error) {
      console.error('Unable to copy invite link', error);
    }
  };

  const storeButtonClasses =
    'border border-slate-400 rounded-full px-5 py-2 text-sm font-semibold transition hover:border-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500';

  const heroTitle = 'Install Chores Nest to accept your invite';
  const heroDesc =
    'We are attempting to open the Android app. If it does not launch, install it from the Play Store to accept the invite.';

  return (
    <div className="min-h-screen bg-cream text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-10 px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 px-8 py-10 shadow-2xl shadow-slate-900/5 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Chores Nest invite</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">{heroTitle}</h1>
          <p className="text-lg text-slate-500">{heroDesc}</p>
        </div>

        {webInviteUrl && (
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
            <span className="break-all text-center font-semibold text-slate-700">{webInviteUrl}</span>
            <button
              onClick={handleCopyLink}
              className="rounded-full border border-slate-400 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 transition hover:border-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              {copyState === 'copied' ? 'Copied!' : 'Copy invite link'}
            </button>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={storeUrls.android} className={storeButtonClasses} target="_blank" rel="noreferrer">
            Get it on Play Store
          </a>
        </div>

        {status === 'fallback' && (
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Redirecting to the Play Store …</p>
        )}
      </div>
    </div>
  );
}
