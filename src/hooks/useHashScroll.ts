import { useEffect } from 'react';

/**
 * Scrolls to the element matching location.hash when the route/hash changes,
 * with a small delay so the target section has rendered.
 */
export function useHashScroll(dep: unknown) {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [dep]);
}
