import Image from 'next/image'

export default function IntroSection(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/office.jpg" alt="office" width={720} height={480} className="rounded-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Reach Your Business's Full Potential Today</h3>
          <p className="mt-4 text-gray-600">Create a profile, connect with customers and grow your presence. Tools for analytics, promotions, and trust-building.</p>
          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2 bg-gradient-to-r from-[#7B3CFF] to-[#2DB2FF] text-white rounded">Get Started</button>
            <button className="px-5 py-2 border rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}
