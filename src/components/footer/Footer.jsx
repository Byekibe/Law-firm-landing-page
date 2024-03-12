function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="mb-8 md:mb-0">
          <a href="/" className="text-xl font-bold text-white mb-4">
            Our Law Firm
          </a>
          <p className="text-gray-400 text-sm">
            The team is small but mighty. There's the brilliant but jaded senior
            partner, a team of passionate young lawyers, and a grizzled
            investigator with a rolodex full of contacts.
          </p>
          <div className="social-links mt-4 flex items-center space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <nav className="hidden md:flex flex-col space-y-4">
          <h3 className="text-gray-400 text-sm font-bold">Practice Areas</h3>
          <ul className="text-gray-400 text-sm list-none pl-0">
            <li>
              <a href="#">Family Law</a>
            </li>
            <li>
              <a href="#">Criminal Defense</a>
            </li>
            <li>
              <a href="#">Estate Planning</a>
            </li>
            {/* Add links to other practice areas */}
          </ul>
        </nav>
        <nav className="hidden md:flex flex-col space-y-4">
          <h3 className="text-gray-400 text-sm font-bold">Resources</h3>
          <ul className="text-gray-400 text-sm list-none pl-0">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="mt-8 md:mt-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Our Law Firm
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
