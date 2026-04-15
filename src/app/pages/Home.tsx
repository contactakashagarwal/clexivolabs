import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Building the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  future
                </span>{" "}
                of innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Clexivo Labs is an umbrella of innovative brands creating
                cutting-edge solutions across social media, finance, and real
                estate sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#brands"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Explore Our Brands
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748518556848-8140cb351d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBodW1hbiUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzc2MjQ4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Authentic human connection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl -z-10 blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Innovative Brands</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each brand under Clexivo Labs is designed to solve real-world
              problems with innovative technology and user-centric design.
            </p>
          </div>

          <div className="space-y-24">
            {/* Thoughtful Social */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1580903635219-1bf584b18bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBnZW51aW5lJTIwY29udmVyc2F0aW9uJTIwY29mZmVlfGVufDF8fHx8MTc3NjI0ODcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Genuine conversation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Social Media
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Thoughtful Social
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Where Thought Meets Thoughtfulness. An invitation-only sanctuary 
                  for authentic human discourse. No algorithms. No bots. No noise. 
                  Just verified humans using social media the way it was intended to be.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      100% bot-free community with verified humans only
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Curated circles connecting authentic voices and thinkers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Every post carries proof of human verification
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/thoughtful-social"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="https://www.thoughtful.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>

            {/* Quidsplit */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                  Finance
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Quidsplit
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Split bills. Not friendships. QuidSplit makes it easy to share 
                  expenses with friends, track who owes what, and settle up—all 
                  without the awkwardness.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Smart group management with automatic calculations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Optimized settlement suggestions for minimal transactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Mobile-first design trusted by thousands of users
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/quidsplit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="https://www.quidsplit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1775376641979-ab763e36f4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBkaW5uZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NjI0ODcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Friends dining together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RealtyBot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1714647212013-760bd7d975bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBzaG93aW5nJTIwcHJvcGVydHl8ZW58MXx8fHwxNzc2MjQ4NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Real estate property viewing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                  Real Estate
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  RealtyBot
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Turn property visitors into qualified leads, 24/7. The first AI chatbot 
                  specifically built and trained for real estate to answer floor-plan, 
                  pricing and amenity questions while capturing leads automatically.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      10K+ properties listed with 24/7 always-on support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Trained on your projects with instant property details
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">
                      Smart lead capture with direct sales team integration
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/realtybot"
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="https://www.realtybot.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to explore our innovations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how Clexivo Labs is shaping the future across multiple
            industries.
          </p>
          <a
            href="mailto:hello@clexivo.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}