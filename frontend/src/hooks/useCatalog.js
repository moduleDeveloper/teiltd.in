import { useCallback, useEffect, useState } from 'react';
import { fetchCatalog } from '@/lib/services/catalog';

/** Loads the plans. Nothing is requested until `enabled` is true (PlansSection
 * turns it on when the section gets near the screen). */
export function useCatalog({ enabled = true } = {}) {
  const [plans, setPlans] = useState([]);
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    fetchCatalog(controller.signal)
      .then((result) => {
        setPlans(result);
        setStatus('success');
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('error');
      });
    return () => controller.abort();
  }, [attempt, enabled]);

  const retry = useCallback(() => {
    setStatus('loading');
    setAttempt((n) => n + 1);
  }, []);

  return { plans, status, retry };
}
