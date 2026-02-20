import { createContext, useContext, useState } from 'react'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openQuote  = () => setIsOpen(true)
  const closeQuote = () => setIsOpen(false)

  return (
    <QuoteContext.Provider value={{ isOpen, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  )
}

export function useQuote() {
  return useContext(QuoteContext)
}
