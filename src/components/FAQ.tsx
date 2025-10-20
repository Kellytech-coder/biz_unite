export default function FAQ(){
  const items = [
    { q: 'How do I register my business?', a: 'Click the Sign Up button and complete the registration form. Verify your email, then create your profile.' },
    { q: 'What payment methods are supported?', a: 'Stripe and Paystack (configurable). We accept card payments and bank transfers.' },
    { q: 'Can I upgrade later?', a: 'Yes — upgrade or downgrade anytime from your account dashboard.' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">FAQs</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="p-4 border rounded">
              <div className="font-semibold">{it.q}</div>
              <div className="text-gray-600 mt-2">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
