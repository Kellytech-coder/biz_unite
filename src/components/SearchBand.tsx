// components/PremiumFeatures.js

export default function PremiumFeatures() {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
  <span className="text-blue-600">Unlock</span>{' '}
  <span className="text-black">
    Your Business Potential with
    <br className="hidden md:block" />
    Premium Features Tailored for Growth
  </span>
</h2>

     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Feature 1 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/placeholderimage1.png"
      alt="Highlighted Placement"
      className="w-full h-48 object-cover rounded-xl shadow-md"
    />
    <p className="mt-2 text-black block font-medium">Stand Out with Highlighted Placement and Boost Your Visibility</p>
    <p className="mt-2 text-gray-600 max-w-xs text-center">
      Our highlighted placement feature ensures your business gets noticed by potential customers.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/placeholderimage2.png"
      alt="Analytics"
      className="w-full h-48 object-cover rounded-xl shadow-md"
    />
    <p className="mt-2 text-black block font-medium">Leverage Analytics to Track Your Performance and Optimize Strategies</p>
    <p className="mt-2 text-gray-600 max-w-xs text-center">
      Access detailed analytics to understand your audience and enhance your marketing efforts.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex flex-col items-center">
    <img
      src="/images/placeholderimage3.png"
      alt="Credibility Badges"
      className="w-full h-48 object-cover rounded-xl shadow-md"
    />
    <p className="mt-2 text-black bold block font-medium">Gain Credibility with Badges That Showcase Your Business Excellence</p>
    <p className="mt-2 text-gray-600 max-w-xs text-center">
      Display badges on your profile to build trust and attract more clients.
    </p>
  </div>
</div>


      <div className="mt-10">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-8 py-3 rounded-full hover:opacity-90 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
