'use client'

import { useEffect } from 'react'
import Button from '@/components/common/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-4">エラーが発生しました</h2>
        <p className="text-gray-600 mb-8">
          申し訳ございません。予期しないエラーが発生しました。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="btn-primary"
          >
            もう一度試す
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="btn-outline"
          >
            ホームへ戻る
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              エラー詳細（開発環境のみ）
            </summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}