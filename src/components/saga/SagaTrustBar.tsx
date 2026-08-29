const TRUST_ITEMS = [
  { value: '4.8', label: 'Rating oaspeți' },
  { value: '10+', label: 'Camere & apartament' },
  { value: '2010', label: 'Ani de experiență' },
  { value: '100%', label: 'Parcare gratuită' },
]

export default function SagaTrustBar() {
  return (
    <section className="border-y border-black/5 bg-white py-10 md:py-12">
      <div className="container-hotel">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-none text-brand">
                {item.value}
              </p>
              <p className="mt-2 text-[13px] text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
