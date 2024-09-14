import { useState } from 'react'
import { Navbar } from './components/navbar'
import { GifContainer } from './components/gif-container'
import { Search } from './components/search'
import { AppContext, AppData } from './providers/providers'

function App() {
  const [appData, setAppData] = useState<AppData | null>(null)

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      <Navbar />
      <Search />
      <GifContainer />
    </AppContext.Provider>
  )
}

export default App
