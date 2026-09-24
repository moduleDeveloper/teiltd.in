import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { fetchCatalog } from '@/lib/services/catalog';
import type { Plan } from '@/lib/types/catalog';

type Status = 'loading' | 'success' | 'error';

export function useCatalog() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetchCatalog(controller.signal)
      .then((result) => {
        setPlans(result);
        setStatus('success');
      })
      .catch((error) => {
        if (!axios.isCancel(error)) setStatus('error');
      });
    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => {
    setStatus('loading');
    setAttempt((n) => n + 1);
  }, []);

  return { plans, status, retry };
}
