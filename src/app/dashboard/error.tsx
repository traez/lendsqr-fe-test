'use client'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="error-container">
      <h2 className="error-title">Something went wrong!</h2>
      <button onClick={reset} className="error-button">
        Try again
      </button>
    </div>
  )
}
