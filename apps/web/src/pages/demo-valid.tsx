import { Suspense } from 'react';
import { ProductList } from '@/features/demo-valid/ui/ProductList';
import { ErrorBoundary } from 'react-error-boundary';
import { useMounted } from '@/shared/hooks/useMounted';
import { ErrorFallback } from '@/shared/ui/ErrorFallback';

const Page = () => {
  const isMounted = useMounted();
  return (
    <main>
      {isMounted ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div>...loading</div>}>
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      ) : null}
    </main>
  );
};

export default Page;
