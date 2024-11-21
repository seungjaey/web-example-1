import type { FallbackProps } from 'react-error-boundary';

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message || '';
  }
  return 'unknown';
};

const ErrorFallback = ({ error }: FallbackProps) => {
  return <div className="container p-4">{`🚧 ERROR : ${getErrorMessage(error)}`}</div>;
};

export { ErrorFallback };
