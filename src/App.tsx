import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RoomModalProvider } from './context/RoomModalContext'
import { EXPERIENCE_REDIRECTS } from './data/experiences'

const HomePage = lazy(() => import('./pages/HomePage'))
const RoomsPage = lazy(() => import('./pages/RoomsPage'))
const PubPage = lazy(() => import('./pages/PubPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))

function PageFallback() {
  return <div className="min-h-[50vh] bg-page" aria-hidden />
}

export default function App() {
  return (
    <BrowserRouter>
      <RoomModalProvider>
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
      </RoomModalProvider>
    </BrowserRouter>
  )
}
