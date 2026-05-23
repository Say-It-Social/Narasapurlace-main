import { Users, Heart, Globe, Award, Sparkles, TrendingUp } from 'lucide-react';

interface StoryPageProps {
  onNavigateToContact?: () => void;
}

export default function StoryPage({ onNavigateToContact }: StoryPageProps) {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-amber-100">The Heritage and Heart Behind Every Creation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Legacy Spanning Generations</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Traditional handmade crochet lace is a timeless textile craft known for its intricate patterns, delicate craftsmanship, and rich cultural heritage. Created by skilled artisans using generations-old techniques, handmade lace reflects the beauty of traditional artistry combined with detailed handwork and elegant design.
              </p>
              <p>
                Over the years, crochet lace craftsmanship has grown into a globally admired heritage craft, valued for its premium quality, unique textures, and artistic appeal. Each handmade lace piece represents dedication, creativity, and the preservation of authentic artisan traditions passed down through generations.
              </p>
              <p>
                Today, traditional crochet lace continues to be popular in home décor, fashion, table linen, and handmade textile collections, while also supporting artisan communities and preserving the legacy of handcrafted textile art.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
            {/* <div className="text-center p-8">
              <Sparkles className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">150+ Years of Excellence</p>
            </div> */}
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It All Started</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* <div className="text-4xl font-bold text-amber-600 mb-3">1870s</div> */}
              <h4 className="font-semibold text-gray-900 mb-2">Introduction</h4>
              <p className="text-sm text-gray-600">Scottish missionaries introduce crochet techniques to Narasapur's local communities</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* <div className="text-4xl font-bold text-amber-600 mb-3">Early 1900s</div> */}
              <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
              <p className="text-sm text-gray-600">The craft spreads rapidly through villages, becoming a primary income source</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* <div className="text-4xl font-bold text-amber-600 mb-3">1950s-80s</div> */} 
              <h4 className="font-semibold text-gray-900 mb-2">Expansion</h4>
              <p className="text-sm text-gray-600">Narasapur earns the title "Lace Town of India" with international recognition</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              {/* <div className="text-4xl font-bold text-amber-600 mb-3">Today</div>  */}
              <h4 className="font-semibold text-gray-900 mb-2">Legacy</h4>
              <p className="text-sm text-gray-600">5,000+ artisans continue preserving tradition while embracing sustainable practices</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl order-2 lg:order-1">
            {/* <div className="text-center p-8">
              <Users className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">5,000+ Women Artisans</p>
            </div> */}
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Artisans, Preserving Tradition</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At the heart of traditional handmade crochet lace craftsmanship are skilled artisans whose creativity, patience, and dedication bring every design to life. These talented craftspeople spend countless hours creating intricate handmade lace products admired for their fine detailing, elegant patterns, and exceptional quality.
              </p>
              <p>
                Passed down through generations, the art of crochet lace continues to preserve valuable traditional skills and cultural heritage. Many artisans work from their homes, balancing their craft with daily responsibilities while contributing to sustainable livelihoods and supporting local artisan communities.
              </p>
              <p>
                We are committed to promoting ethical craftsmanship, fair trade values, and the preservation of handmade textile traditions. By supporting handmade crochet lace, you help celebrate authentic artisan work, encourage sustainable craftsmanship, and preserve a timeless heritage of handcrafted textile artistry for future generations.
              </p>
              <p>
                When you choose Narasapur lace, you're not just purchasing a beautiful handcrafted piece. You're investing in the futures of these remarkable women and their families.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Heart className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Handmade with Passion</h4>
            <p className="text-gray-600 text-sm">
              Every stitch is made with care, dedication, and love. Our artisans pour their hearts into each creation, ensuring exceptional quality in every piece.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Globe className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Globally Recognized</h4>
            <p className="text-gray-600 text-sm">
              Our lace has earned international acclaim, gracing homes and special occasions across continents. Recognized for authenticity and superior craftsmanship.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Quality</h4>
            <p className="text-gray-600 text-sm">
              Our commitment to excellence has earned numerous accolades. We maintain the highest standards in every piece that bears our name.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-500 rounded-2xl p-12 text-white mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Sustainability</span>
              </h3>
              <p className="text-amber-100">
                We use eco-friendly materials and sustainable practices, ensuring our craft benefits both artisans and the environment for generations to come.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>Fair Trade</span>
              </h3>
              <p className="text-amber-100">
                Every artisan is fairly compensated. We believe in transparent, ethical business practices that respect the value of handmade craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <Sparkles className="w-6 h-6" />
                <span>Excellence</span>
              </h3>
              <p className="text-amber-100">
                We maintain the highest standards of quality, ensuring every piece reflects the skill, dedication, and tradition of Narasapur lace artistry.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Craft of Narasapur Lace</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Creating a piece of Narasapur lace is a labor-intensive process requiring exceptional skill and patience. What begins as fine cotton thread is transformed through traditional crochet techniques into intricate patterns of breathtaking beauty.
              </p>
              <p>
                Each artisan develops her own style and technique over years of practice, creating unique variations while maintaining the authenticity of traditional patterns. The process cannot be rushed—quality takes time, and our artisans understand this deeply.
              </p>
              <p>
                From selecting the perfect thread to the final quality inspection, every step is performed with meticulous attention to detail. This commitment to perfection is why Narasapur lace commands respect in the global marketplace.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
            {/* <div className="text-center p-8">
              <Sparkles className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">Handcrafted Excellence</p>
            </div> */}
          </div>
        </div>

        <div className="mt-20 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            By choosing Narasapur lace, you become part of a global community supporting traditional artistry and empowering artisan communities in India.
          </p>
          <button onClick={onNavigateToContact} className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
