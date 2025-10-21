export default function BusinessSearch() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Search for a business
        </h1>
        <p className="mb-8 text-lg">
          Search for businesses by category, location, or keywords to discover what you need today.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex items-center bg-white text-black rounded-md px-4 py-2 w-full md:w-72">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter business name"
              className="outline-none w-full bg-transparent"
            />
          </div>

          <select className="px-4 py-2 rounded-md bg-white text-black w-full md:w-48">
            <option>Category</option>
            <option>Restaurants</option>
            <option>Shops</option>
            <option>Services</option>
          </select>

          <select className="px-4 py-2 rounded-md bg-white text-black w-full md:w-48">
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>

          <button
            type="submit"
            className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100"
          >
            Search
          </button>
        </form>

        <p className="mt-6 text-sm text-white">
          Find businesses near you using our smart search feature
        </p>
      </div>

      {/* 👇 Meet point curve for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C173.81,92.41,0,120,0,120H1200V0S928.94,89.29,645.5,72.5C487.17,63.4,375.27,44.55,321.39,56.44Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
