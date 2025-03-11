import React from 'react'
import { BaseElement } from '@/types/ui/base.type'

function Main({ className, children }: BaseElement) {
  return (
    <main className={className}>
      {children}
    </main>
  )
}

export default Main
