function Footer() {
  return (
    <section className="bg-gray-50 py-16 px-4 mt-20 ">
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10 md:gap-20 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h1 className="font-bold text-sm mb-2">Company</h1>
          <p className="text-gray-400 font-medium text-sm">About</p>
          <p className="text-gray-400 font-medium text-sm">Teams</p>
          <p className="text-gray-400 font-medium text-sm">Careers</p>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="font-bold text-sm mb-2">Listings</h1>
          <p className="text-gray-400 font-medium text-sm">For Sale</p>
          <p className="text-gray-400 font-medium text-sm">For Rent</p>
          <p className="text-gray-400 font-medium text-sm">Neighborhoods</p>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="font-bold text-sm mb-2">Resources</h1>
          <p className="text-gray-400 font-medium text-sm">Blog</p>
          <p className="text-gray-400 font-medium text-sm">FAQs</p>
          <p className="text-gray-400 font-medium text-sm">Guides</p>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="font-bold text-sm mb-2">Support</h1>
          <p className="text-gray-400 font-medium text-sm">Contact</p>
          <p className="text-gray-400 font-medium text-sm">Help Desk</p>
          <p className="text-gray-400 font-medium text-sm">Feedback</p>
        </div>

        {/* Column 5 */}
        <div>
          <h1 className="font-bold text-sm mb-2">Legal</h1>
          <p className="text-gray-400 font-medium text-sm">Privacy Policy</p>
          <p className="text-gray-400 font-medium text-sm">Terms of Use</p>
          <p className="text-gray-400 font-medium text-sm">Copyright</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
