import { Link } from "react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="inline-block rounded-lg bg-white p-4 mb-6 shadow-sm hover:opacity-95 transition-opacity"
            >
              <Logo />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              An umbrella of innovative brands creating solutions for social media,
              finance, and real estate. Building the future, one product at a time.
            </p>
            <p className="text-gray-400">
              <a
                href="https://clexivo.com"
                className="hover:text-white transition-colors"
              >
                clexivo.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/thoughtful-social"
                  className="hover:text-white transition-colors"
                >
                  Thoughtful Social
                </Link>
              </li>
              <li>
                <Link
                  to="/quidsplit"
                  className="hover:text-white transition-colors"
                >
                  Quidsplit
                </Link>
              </li>
              <li>
                <Link
                  to="/realtybot"
                  className="hover:text-white transition-colors"
                >
                  RealtyBot
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@clexivo.com"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Clexivo Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
