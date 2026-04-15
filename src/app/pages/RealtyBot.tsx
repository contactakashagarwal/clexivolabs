import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  ExternalLink,
  MessageSquare,
  Image,
  Code,
  Palette,
  BarChart3,
  Shield,
  CheckCircle,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function RealtyBot() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                AI-Powered Real Estate Assistant
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Turn property visitors into{" "}
                <span className="text-purple-600">qualified leads, 24/7.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                First chatbot specifically built and trained for Real Estate.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                RealtyBot is the AI chatbot built exclusively for property
                builders. Train it on your projects, embed it on your website in
                one line, and let it answer floor-plan, pricing and amenity
                questions while capturing leads automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.realtybot.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Start Free - No Card
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1751448582395-27fc57293f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NzYyNDg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI chatbot technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Properties listed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Real estate firms</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Always-on support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Real Estate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Built specifically for real estate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to convert anonymous website traffic into
              qualified site-visit requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Trained on YOUR projects
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Upload brochures, price sheets and floor plans. RealtyBot learns
                every detail and answers visitor questions accurately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Image className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Floor plans & galleries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visitors can browse 2 BHK, 3 BHK layouts and project images
                directly inside the chat — no extra clicks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                One-line embed
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Drop a single script tag on any property website. Works with
                Wordpress, Webflow, custom HTML — anything.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Match your brand
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customize colors, logo and welcome message to perfectly match
                each project's brand identity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Lead capture & analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every interested visitor becomes a qualified lead in your
                dashboard with full conversation context.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Secure & multi-tenant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade isolation. Your data and your visitors'
                conversations stay private and encrypted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See RealtyBot in action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how the AI engages potential buyers, showcases your
              projects, and converts curious visitors into qualified leads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Property details on demand
                </h3>
                <p className="text-gray-600">
                  Pricing, RERA, possession dates, amenities, location — answered
                  the moment a visitor asks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Visual floor plan carousel
                </h3>
                <p className="text-gray-600">
                  2 BHK, 3 BHK and penthouse layouts displayed inside the chat
                  with one tap to enlarge.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Smart lead capture
                </h3>
                <p className="text-gray-600">
                  When intent is high, the bot collects name, email and phone —
                  and pings your team instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Connect to sales
                </h3>
                <p className="text-gray-600">
                  Hand off hot leads to a human agent, schedule site visits or
                  send WhatsApp follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">Free</div>
                <p className="text-sm text-gray-600 mt-2">
                  Full access for 30 days, then free limits above
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>1 chatbot, unlimited docs</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>100 assistant replies/mo per bot (UTC) after trial</span>
                </li>
              </ul>
              <a
                href="https://www.realtybot.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Start free
              </a>
            </div>

            {/* Solo */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solo</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">₹4,999</div>
                <p className="text-sm text-gray-600">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>1 chatbot</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited training documents</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited assistant replies</span>
                </li>
              </ul>
              <a
                href="https://www.realtybot.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Get started free
              </a>
            </div>

            {/* Portfolio - Most Popular */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 border-2 border-purple-600 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Portfolio</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white">₹6,999</div>
                <p className="text-sm text-purple-100">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>3 chatbots</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Unlimited training documents</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Unlimited assistant replies</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>AI trained on your property documents</span>
                </li>
              </ul>
              <a
                href="https://www.realtybot.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get started free
              </a>
            </div>

            {/* Agency */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Agency</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">₹9,999</div>
                <p className="text-sm text-gray-600">/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited chatbots</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited training documents</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Unlimited assistant replies</span>
                </li>
              </ul>
              <a
                href="https://www.realtybot.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714647212013-760bd7d975bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBzaG93aW5nJTIwcHJvcGVydHl8ZW58MXx8fHwxNzc2MjQ4NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Real estate property consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Property Sales?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start free with no credit card required. See results in minutes.
          </p>
          <a
            href="https://www.realtybot.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Start Free - No Card Required
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
