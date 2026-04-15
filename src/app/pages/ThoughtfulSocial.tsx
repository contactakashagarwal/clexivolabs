import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import {
  ExternalLink,
  Shield,
  Users,
  CheckCircle,
  MessageCircle,
  Lock,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ThoughtfulSocial() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                100% Bot-Free Community
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Where Thought Meets{" "}
                <span className="text-orange-500">
                  Thoughtfulness
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                An invitation-only sanctuary for authentic human
                discourse. No algorithms. No bots. No noise.
                Just verified humans using social media the way
                it was intended to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.thoughtful.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580903635219-1bf584b18bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBnZW51aW5lJTIwY29udmVyc2F0aW9uJTIwY29mZmVlfGVufDF8fHx8MTc3NjI0ODcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Genuine human conversation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail designed for meaningful human
              connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Verified Humans Only
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every member is vetted through our peer
                invitation system. Zero tolerance for automated
                accounts and artificial engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Curated Circles
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with authentic voices, thinkers, and
                creators. Quality over quantity, always.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Proof of Human
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every post carries verification. Engage with
                confidence knowing you're connecting with real
                people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A New Kind of Digital Space */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              A New Kind of Digital Space
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail designed for meaningful human
              connection.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Sanctuary Architecture
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A thoughtfully designed three-column layout: The
              Sanctuary (navigation), Stream of Consciousness
              (your feed), and the Inner Circle (your trusted
              connections). Every element serves a purpose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  The Sanctuary
                </h4>
                <p className="text-gray-700 text-sm">
                  Your navigation hub for accessing different
                  areas of the platform.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  Stream of Consciousness
                </h4>
                <p className="text-gray-700 text-sm">
                  Your personalized feed of thoughtful content
                  from your network.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">
                  Inner Circle
                </h4>
                <p className="text-gray-700 text-sm">
                  Your most trusted connections in one dedicated
                  space.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-bold text-orange-500">
                99.8%
              </div>
              <div className="text-lg text-gray-700">
                <div className="font-bold">Humanity Score</div>
                <div className="text-sm">
                  Free from algorithms
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our platform is designed to be 99.8% free from
              algorithms that hijack your attention. Your feed
              is curated by human connections, not manipulative
              AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools designed for authentic engagement and
              meaningful discourse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sweet Thoughts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your ideas, reflections, and insights
                  with your community in a thoughtful,
                  distraction-free environment.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Connections
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Build meaningful relationships with
                  like-minded individuals through our curated
                  invitation system.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <Lock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Scheduled Posts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plan your content thoughtfully with the
                  ability to schedule posts for optimal
                  engagement with your circle.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Afterlife
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Archive and preserve your most meaningful
                  conversations and thoughts for posterity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748518556848-8140cb351d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBodW1hbiUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzc2MjQ4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Authentic connections"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580903635219-1bf584b18bf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBnZW51aW5lJTIwY29udmVyc2F0aW9uJTIwY29mZmVlfGVufDF8fHx8MTc3NjI0ODcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Thoughtful conversations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the Thoughtful Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Request an invitation to experience social media the
            way it should be—meaningful, authentic, and human.
          </p>
          <a
            href="https://www.thoughtful.social/join-request"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Request to Join
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}