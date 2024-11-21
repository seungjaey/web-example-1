import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());
  const { push } = useRouter();
  const handleClickBackToRoute = () => push('/');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <Component {...pageProps} />
        <button type="button" onClick={handleClickBackToRoute}>
          back to route
        </button>
      </div>
    </QueryClientProvider>
  );
}
