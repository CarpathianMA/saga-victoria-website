import { RESERVATION_PHONE, RESERVATION_PHONE_DISPLAY } from '../../data/rooms'

export default function SagaStickyBook() {
  return (
    <div className="sticky-book-bar">
      <a href={`tel:+4${RESERVATION_PHONE}`} className="btn-book w-full justify-center">
        Rezervă · {RESERVATION_PHONE_DISPLAY}
      </a>
    </div>
  )
}
