import React, { useState, useContext, createContext } from "react"

const GlobalSpinnerContext = createContext<boolean>(false)
const GlobalSpinnerActionsContext = createContext<React.Dispatch<React.SetStateAction<boolean>>>(() => {})

export const useGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext)
export const useGlobalSpinnerActionsContext = (): React.Dispatch<React.SetStateAction<boolean>> =>
  useContext<React.Dispatch<React.SetStateAction<boolean>>>(GlobalSpinnerActionsContext)

interface GlobalSpinnerContextProviderProps {
  children?: React.ReactNode
}

const GlobalSpinnerContextProvider = ({
  children
}: GlobalSpinnerContextProviderProps) => {
  const [isGlobalSpinnerOn, setIsGlobalSpinnerOn] = useState(false)

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setIsGlobalSpinnerOn}>
        {children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  )
}

export default GlobalSpinnerContextProvider