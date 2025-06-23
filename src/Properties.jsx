import houseImage2 from '../src/assets/realestate2.jpeg';
import houseImage3 from '../src/assets/realestate3.jpeg';
import houseImage4 from '../src/assets/realestate4.jpeg';
import houseImage5 from '../src/assets/realestate5.jpeg';
import houseImage6 from '../src/assets/realestate6.jpeg';
import houseImage7 from '../src/assets/realestate7.jpeg';

function Properties() {
  const houses = [
    houseImage2,
    houseImage3,
    houseImage4,
    houseImage5,
    houseImage6,
    houseImage7,
  ];

  return (
    <section id="properties" className="py-20 px-4 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">
          Find your home with <span className="text-gray-400">unique preferences</span>
        </h1>
        <p className="text-lg font-medium mt-5">
          Discover a handpicked collection of homes tailored to your preferences, making it easy <br /> 
          to find the perfect property that suits your lifestyle and needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-screen-xl mx-auto">
        {houses.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl text-center p-4 hover:bg-gray-200 transition duration-300"
          >
            <img
              src={image}
              className="h-52 w-full object-cover rounded-lg"
              alt="Modern house"
            />
            <p className="font-bold text-xl mt-4">Luxury front</p>
            <p className="font-bold text-lg text-gray-600">$420,000</p>
          </div>
          

          
        ))}
      </div>
    </section>
  );
}



export default Properties;
