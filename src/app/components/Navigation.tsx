import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clexivo Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/thoughtful-social"
              className={`transition-colors ${
                isActive("/thoughtful-social")
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Thoughtful Social
            </Link>
            <Link
              to="/quidsplit"
              className={`transition-colors ${
                isActive("/quidsplit")
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Quidsplit
            </Link>
            <Link
              to="/realtybot"
              className={`transition-colors ${
                isActive("/realtybot")
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              RealtyBot
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/")
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/thoughtful-social"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/thoughtful-social")
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Thoughtful Social
            </Link>
            <Link
              to="/quidsplit"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/quidsplit")
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              Quidsplit
            </Link>
            <Link
              to="/realtybot"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive("/realtybot")
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              RealtyBot
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
