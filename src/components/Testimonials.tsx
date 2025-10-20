import Image from 'next/image'

export default function Testimonial(){
  return (
    <section className="py-16 bg-[#0f0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold">What our Users Say</h3>
        <div className="mt-8 bg-[#120808] p-8 rounded-lg flex flex-col md:flex-row items-center gap-6">
          <div className="w-36 h-36 relative rounded-full overflow-hidden">
            <Image src="/person.jpg" alt="user" layout="fill" objectFit="cover" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-lg">&quot;This platform has transformed the way we connect with customers. Sales grew 3x in three months.&quot;</p>
            <div className="mt-3 text-sm text-gray-300">— John Doe, CEO</div>
          </div>
        </div>
      </div>
    </section>
  )
}
