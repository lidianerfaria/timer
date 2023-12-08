import { Routes, Route } from 'react-router-dom'
import History from './pages/History'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default Router
