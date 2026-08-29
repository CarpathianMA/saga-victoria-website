import { EVENT_TYPE_OPTIONS } from '../../../data/eventsPage'
import { RESTAURANT_PHONE, RESTAURANT_PHONE_DISPLAY } from '../../../data/experiences'
import { SAGA } from '../../../data/sagaAssets'

export default function SagaEventsForm() {
  return (
    <section id="events-form" className="section-hotel bg-[#f3f0eb]">
      <div className="container-hotel">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="h2-hotel">Planifică evenimentul tău</h2>
          <p className="lead-hotel">
            Spune-ne despre evenimentul tău. Răspundem cu o ofertă personalizată, fără obligații.
          </p>
        </div>

        <form
          className="mx-auto mt-10 max-w-[720px] bg-white p-6 md:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="event-type" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Eveniment
              </label>
              <select
                id="event-type"
                required
                className="w-full border border-black/15 bg-page px-4 py-3 text-[14px] text-ink outline-none focus:border-brand"
                defaultValue=""
              >
                <option value="" disabled>Alege tipul evenimentului</option>
                {EVENT_TYPE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="first-name" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Prenume
              </label>
              <input id="first-name" required type="text" className="field-hotel" />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Nume
              </label>
              <input id="last-name" required type="text" className="field-hotel" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Email
              </label>
              <input id="email" required type="email" className="field-hotel" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Număr de telefon
              </label>
              <input id="phone" required type="tel" className="field-hotel" />
            </div>
            <div>
              <label htmlFor="event-date" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Data evenimentului
              </label>
              <input id="event-date" type="date" className="field-hotel" />
            </div>
            <div>
              <label htmlFor="guests" className="mb-1.5 block text-[12px] uppercase tracking-[0.08em] text-muted">
                Invitați
              </label>
              <input id="guests" type="number" min={1} placeholder="ex. 80" className="field-hotel" />
            </div>
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-2.5">
            <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-brand" />
            <span className="text-[12px] leading-[1.55] text-muted">
              Accept politica de confidențialitate și termenii Saga Victoria.
            </span>
          </label>

          <div className="mt-8 flex flex-wrap gap-4">
            <button type="submit" className="btn-book">
              Trimite
            </button>
            <a href={`tel:+4${RESTAURANT_PHONE}`} className="btn-outline-hotel">
              Sună {RESTAURANT_PHONE_DISPLAY}
            </a>
          </div>
        </form>

        <p className="mx-auto mt-8 max-w-[640px] text-center text-[14px] text-muted">
          <a href={SAGA.menus.events} target="_blank" rel="noopener noreferrer" className="link-arrow !inline-flex">
            Descarcă meniul pentru evenimente (PDF)
            <span aria-hidden>→</span>
          </a>
        </p>
      </div>
    </section>
  )
}
