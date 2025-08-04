import { useState, useEffect, useCallback } from 'react'
import { storage } from '@/lib/utils'

/**
 * 型安全なローカルストレージ操作のカスタムフック
 * SSRに対応し、初期値の設定やエラーハンドリングを含む
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // 初期値の設定（クライアントサイドのみ）
  useEffect(() => {
    const value = storage.get<T>(key, initialValue)
    if (value !== null) {
      setStoredValue(value)
    }
  }, [key, initialValue])

  // 値の更新
  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      storage.set(key, valueToStore)
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  // 値の削除
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      storage.remove(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}