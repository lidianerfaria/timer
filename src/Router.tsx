import { Routes, Route } from 'react-router-dom'
import History from './pages/History'

const Router = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="history" element={<History />} />
    </Routes>
  )
}

export default Router
