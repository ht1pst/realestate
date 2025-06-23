import houseImage from '../src/assets/realestate.webp';
import location from '../src/assets/location.jpeg';
import modern from '../src/assets/modern.webp';
import trust from '../src/assets/trust.png';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-10 px-4 py-12 rounded-xl bg-gray-100 h-full w-full md:flex-row md:justify-around flex-wrap"
    >
      {/* Card 1 */}
      <motion.div
        className="max-w-sm text-center"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        <img src={location} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Prime locations.</h2>
        <p className="text-gray-500 font-bold">
          Properties situated in sought-after neighborhoods with convenient amenities nearby.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="max-w-sm text-center"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ amount: 0.3 }}
      >
        <img src={modern} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Smart layouts.</h2>
        <p className="text-gray-500 font-bold">
          Contemporary layouts maximizing light, comfort, and functionality in every room.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="max-w-sm text-center"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        <img src={trust} alt="Modern house" className="w-full h-60 object-cover rounded-lg" />
        <h2 className="font-bold text-2xl mt-4">Trusted support.</h2>
        <p className="text-gray-500 font-bold">
          Reliable support and guidance throughout your property journey.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
