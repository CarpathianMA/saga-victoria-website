import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RoomModalProvider } from './context/RoomModalContext'
import { EXPERIENCE_REDIRECTS } from './data/experiences'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import EventsPage from './pages/EventsPage'
import PubPage from './pages/PubPage'

export default function App() {
  return (
    <BrowserRouter>
      <RoomModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/camere" element={<RoomsPage />} />
          <Route path="/pub" element={<PubPage />} />
          <Route path="/evenimente" element={<EventsPage />} />
          {Object.entries(EXPERIENCE_REDIRECTS).map(([from, to]) => (
            <Route
              key={from}
              path={`/${from}`}
              element={<Navigate to={to.startsWith('/') ? to : `/${to}`} replace />}
            />
          ))}
        </Routes>
      </RoomModalProvider>
    </BrowserRouter>
  )
}
