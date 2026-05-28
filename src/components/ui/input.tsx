import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-lg border bg-gray-900 px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 transition-colors
          ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-indigo-500'}
          focus:outline-none focus:ring-1 focus:ring-indigo-500 ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
