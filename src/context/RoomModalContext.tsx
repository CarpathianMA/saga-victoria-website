import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { ROOMS, type Room } from '../data/rooms'
import RoomModal from '../components/RoomModal'

interface RoomModalContextValue {
  openRoom: (room: Room) => void
  closeRoom: () => void
  selectedRoom: Room | null
}

const RoomModalContext = createContext<RoomModalContextValue | null>(null)

export function RoomModalProvider({ children }: { children: ReactNode }) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const openRoom = useCallback((room: Room) => {
    setSelectedRoom(room)
    window.history.replaceState(null, '', `#${room.id}`)
  }, [])

  const closeRoom = useCallback(() => {
    setSelectedRoom(null)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  useEffect(() => {
    if (!selectedRoom) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedRoom])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRoom()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeRoom])

  return (
    <RoomModalContext.Provider value={{ openRoom, closeRoom, selectedRoom }}>
      {children}
      {selectedRoom && <RoomModal key={selectedRoom.id} room={selectedRoom} onClose={closeRoom} />}
    </RoomModalContext.Provider>
  )
}

export function useRoomModal() {
  const ctx = useContext(RoomModalContext)
  if (!ctx) throw new Error('useRoomModal must be used within RoomModalProvider')
  return ctx
}

export function useRoomHashOpen() {
  const { openRoom } = useRoomModal()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const room = ROOMS.find((r) => r.id === hash)
    if (room) openRoom(room)
  }, [openRoom])
}
