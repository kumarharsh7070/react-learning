import { useState } from 'react'

import './App.css'
import { ThemeContext } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
    document.documentElement.classList.add("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
    document.documentElement.classList.remove("dark")
  }
  return (

     <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
         <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/*theme buttons*/}
                    </div>
qwdfg
                    <div className="w-full max-w-sm mx-auto">
                          {/*theme buttons*/}
                    </div>
                </div>
            </div>
</ThemeContextProvider>
     
    
  )
}

export default App
