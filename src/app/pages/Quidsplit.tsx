import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  ExternalLink,
  Users,
  Settings,
  CheckCircle,
  Bell,
  BarChart3,
  Smartphone,
  Download,
  Activity,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Quidsplit() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                The Smart Way to Share Expenses
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Split bills.{" "}
                <span className="text-green-600">
                  Not friendships.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                QuidSplit makes it easy to share expenses with
                friends, track who owes what, and settle up—all
                without the awkwardness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://www.quidsplit.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Get Started Free
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium">
                  Trusted by thousands of happy users
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1775376641979-ab763e36f4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBkaW5uZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NjI0ODcxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Friends dining together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <a
          href="https://play.google.com/store/apps/details?id=com.quidsplit.app&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="h-12 w-12" />
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    Get QuidSplit on your phone
                  </h3>
                  <p className="text-green-100">
                    The Android app is live on Google Play—split
                    expenses and settle up on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to share expenses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features that make splitting bills
              simple, transparent, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Split with Anyone
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track shared expenses with friends, roommates,
                or travel companions. Add people easily and keep
                everyone in the loop.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Group Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create groups for trips, households, or events.
                See exactly who owes what with automatic
                calculations and balances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Settle Up Easily
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simplify complex debts with optimized settlement
                suggestions. Pay back friends with minimal
                transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Bell className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Notified
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get updates when expenses are added, payments
                are made, or balances change. Never miss a beat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Detailed Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Understand your spending patterns with visual
                insights and charts. Make smarter financial
                decisions together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mobile-First Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautifully designed for your phone. Track
                expenses on the go, wherever life takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                  <Activity className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Activity Feed
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  See your recent expenses, settlements, and
                  group activity at a glance. Keep track of
                  what's happening across your groups.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Export & Share
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Download your data in CSV, Excel, or PDF.
                  Export expenses and reports for easy
                  record-sharing with your group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Perfect For Every Situation
            </h2>
            <p className="text-xl text-gray-600">
              Whether it's a trip, household, or event—QuidSplit
              has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Roommates
              </h3>
              <p className="text-gray-600">
                Split rent, utilities, and household expenses
                with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Travel
              </h3>
              <p className="text-gray-600">
                Share costs on group trips and vacations
                effortlessly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Events
              </h3>
              <p className="text-gray-600">
                Organize parties, dinners, and celebrations
                without financial stress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">💑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Couples
              </h3>
              <p className="text-gray-600">
                Manage shared finances and expenses
                transparently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1726607288637-a646ddd3814a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxsJTIwc3BsaXR0aW5nJTIwcGF5bWVudCUyMG1vYmlsZXxlbnwxfHx8fDE3NzYyNDg3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mobile payment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Splitting Smarter
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands who've simplified their group
            finances with QuidSplit.
          </p>
          <a
            href="https://www.quidsplit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Get Started Free
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}