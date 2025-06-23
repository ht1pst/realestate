function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Clients say</h1>
        <h2 className="text-2xl text-gray-500 font-semibold mt-2">What homeowners love</h2>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        {/* Review Card 1 */}
        <div className="bg-gray-100 rounded-2xl max-w-sm w-full p-6 shadow-md text-center">
          <p className="text-gray-600 font-medium italic mb-8">
            “Found my dream home, thanks to Funto’s expertise.”
          </p>
          <p className="text-gray-800 font-bold">Ada N.</p>
          <p className="text-gray-500 font-medium">Investor</p>
        </div>

        {/* Review Card 2 */}
        <div className="bg-gray-100 rounded-2xl max-w-sm w-full p-6 shadow-md text-center">
          <p className="text-gray-600 font-medium italic mb-8">
            “Navigated the process with ease, highly recommend.”
          </p>
          <p className="text-gray-800 font-bold">David O.</p>
          <p className="text-gray-500 font-medium">Homeowner</p>
        </div>

        {/* Review Card 3 */}
        <div className="bg-gray-100 rounded-2xl max-w-sm w-full p-6 shadow-md text-center">
          <p className="text-gray-600 font-medium italic mb-8">
            “Professional and reliable truly impressed.”
          </p>
          <p className="text-gray-800 font-bold">Chioma K.</p>
          <p className="text-gray-500 font-medium">Landlord</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
