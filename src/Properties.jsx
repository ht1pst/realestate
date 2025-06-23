import houseImage2 from '../src/assets/realestate2.jpeg';
import houseImage3 from '../src/assets/realestate3.jpeg';
import houseImage4 from '../src/assets/realestate4.jpeg';
import houseImage5 from '../src/assets/realestate5.jpeg';
import houseImage6 from '../src/assets/realestate6.jpeg';
import houseImage7 from '../src/assets/realestate7.jpeg';
import { motion } from "framer-motion";

function Properties() {
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
        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage2} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage3} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage4} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage5} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage6} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl text-center p-4"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={houseImage7} className="h-52 w-full object-cover rounded-lg" alt="Modern house" />
          <p className="font-bold text-xl mt-4">Luxury front</p>
          <p className="font-bold text-lg text-gray-600">$420,000</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Properties;
