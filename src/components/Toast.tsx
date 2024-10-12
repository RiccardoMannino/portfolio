import React from 'react'

type ToastProps = {
  message: string
  type: string
}

export default function Toast({ message, type }: ToastProps) {
  return (
    <div
      className={`toast ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {message}
    </div>
  )
}
