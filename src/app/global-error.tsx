"use client";

interface GlobalErrorProps {
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="global-error-container">
        <h2 className="global-error-title">Something went wrong!</h2>
        <button className="global-error-button" onClick={reset}>
          Try again
        </button>
      </body>
    </html>
  );
}
