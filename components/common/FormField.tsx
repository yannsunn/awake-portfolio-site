'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface FormFieldProps {
  label: string
  id: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  required?: boolean
  error?: string
  rows?: number
  className?: string
  register?: any
  variant?: 'default' | 'contact'
}

export default function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  error,
  rows = 6,
  className = '',
  register,
  variant = 'default'
}: FormFieldProps) {
  const labelClass = variant === 'contact'
    ? 'block mb-3 font-semibold text-gray-800 text-sm'
    : 'block text-sm font-medium text-gray-700 mb-2'

  const inputClass = variant === 'contact'
    ? 'h-12 border-2 border-gray-200 focus:border-gray-900 rounded-xl'
    : 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent'

  const textareaClass = variant === 'contact'
    ? 'border-2 border-gray-200 focus:border-gray-900 rounded-xl resize-none'
    : 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-vertical'

  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={textareaClass}
          {...(register && register)}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          {...(register && register)}
        />
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
