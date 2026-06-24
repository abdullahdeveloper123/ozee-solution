'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <div className="min-h-screen grid place-items-center"><button onClick={reset}>Try again</button></div>;
}
