export default function Pricing(){
  const plans = [
    { name: 'Basic', price: '$19/mo', features: ['Listing', 'Contact info', 'Basic analytics'] },
    { name: 'Business', price: '$29/mo', features: ['Everything in Basic', 'Highlighted placement', 'Advanced analytics'], featured: true },
    { name: 'Enterprise', price: '$49/mo', features: ['Priority support', 'Custom integrations', 'SLA'] }
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-2xl font-semibold">Pricing Plans</h3>
        <p className="text-center text-gray-600 mt-2">Choose the plan that fits your business.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div key={idx} className={`p-6 rounded-lg shadow ${p.featured ? 'bg-gradient-to-b from-white to-white/90 transform scale-105' : 'bg-white'}`}>
              <div className="text-sm text-gray-500">{p.name}</div>
              <div className="text-3xl font-bold mt-4">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f, i) => <li key={i} className="text-gray-600">• {f}</li>)}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] text-white">Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
