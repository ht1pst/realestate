import houseImage from '../src/assets/realestate.webp';
import location from '../src/assets/location.jpeg';
import modern from '../src/assets/modern.webp';
import trust from '../src/assets/trust.png';

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-10  px-4 py-12 rounded-xl bg-gray-100 h-full w-full md:flex-row  md:justify-around flex-wrap"
    >
      {/* Card 1 */}
      <div className="max-w-sm text-center">
        <img src={location} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Prime locations.</h2>
        <p className="text-gray-500 font-bold">
          Properties situated in sought-after neighborhoods with convenient amenities nearby.
        </p>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm text-center">
        <img src={modern} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Smart layouts.</h2>
        <p className="text-gray-500 font-bold">
          Contemporary layouts maximizing light, comfort, and functionality in every room.
        </p>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm text-center">
        <img src={trust} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Trusted support.</h2>
        <p className="text-gray-500 font-bold">
          Reliable support and guidance throughout your property journey.
        </p>
      </div>
    </section>
  );
}

export default About;
