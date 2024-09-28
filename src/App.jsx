import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Sidebar/>
      <Main/>
    </Provider>
  )
}

export default App
