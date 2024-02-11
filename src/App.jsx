import { Routes, Route } from 'react-router-dom'
import PanelLayout from './layouts/panel'
import GlobalLayout from './layouts/global'
import "./assets/styles.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<GlobalLayout />} />
        <Route path="/admin/*" element={<PanelLayout />} />
      </Routes>
    </>
  )
}

export default App
