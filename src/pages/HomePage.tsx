import { Heart, Users, Award, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigateToContact?: () => void;
  onNavigateToStory?: () => void;
}

export default function HomePage({ onNavigateToContact, onNavigateToStory }: HomePageProps) {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <section className="relative h-[600px] bg-gradient-to-r from-amber-800 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div> */}
        <div className="absolute inset-1 bg-[url('/src/assets/home.png')] bg-cover bg-center opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              The Legacy of Narasapur Crochet Lace
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-amber-100">
              Handcrafted excellence from the artisan villages of Andhra Pradesh, where tradition meets timeless beauty
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onNavigateToContact} className="bg-white text-amber-800 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Collection
              </button>
              <button onClick={onNavigateToStory} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition-all duration-200">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">A Heritage Woven in Thread</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The History of Narasapur Lace</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For generations, crochet lace craftsmanship has been an important part of traditional textile heritage, admired for its delicate handmade patterns, fine detailing, and skilled artistry.
              </p>
              <p>
                What began as a small cottage industry gradually evolved into a celebrated craft tradition, known for blending timeless techniques with artistic creativity. The intricate lacework reflects patience, precision, and the dedication of artisans who have preserved the craft through generations.
              </p>
              <p>
                Today, handmade crochet lace is appreciated around the world for its elegant designs, soft texture, and exceptional craftsmanship. Each piece represents a rich cultural legacy and the enduring beauty of handmade art passed down over time.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
            {/* <div className="text-center p-8">
              <Sparkles className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">150+ Years of Tradition</p>
            </div> */}
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Traditional Crafting Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Thread Selection', desc: 'Premium quality cotton threads are carefully chosen for their strength and sheen' },
              { step: '02', title: 'Pattern Design', desc: 'Traditional and contemporary patterns are meticulously planned on paper' },
              { step: '03', title: 'Hand Crochet', desc: 'Skilled artisans work with fine hooks to create intricate lace designs' },
              { step: '04', title: 'Quality Control', desc: 'Each piece is inspected for perfection before reaching our customers' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl order-2 md:order-1">
            {/* <div className="text-center p-8">
              <Users className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">5,000+ Women Artisans</p>
            </div> */}
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Women Artisans</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
               At the heart of every handmade lace creation are skilled artisans whose dedication and craftsmanship bring each design to life. Many of these artisans learn the art through generations, preserving traditional techniques while continuing to refine their skills with time and experience.
              </p>
              <p>
                The craft is deeply connected to local communities, where artisans often work from their homes while balancing daily responsibilities. This traditional cottage industry not only supports livelihoods but also helps sustain cultural heritage and encourages economic empowerment within artisan families.
              </p>
              <p>
                Each handcrafted piece reflects patience, creativity, and attention to detail, making every design unique in its own way. The continued support for handmade craftsmanship helps preserve these timeless skills while honoring the talent, hard work, and artistic spirit of the artisan community.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Heart className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Handmade with Love</h4>
            <p className="text-gray-600">Every piece is crafted by hand with care and attention to detail</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Quality</h4>
            <p className="text-gray-600">Internationally recognized for excellence in craftsmanship</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-all duration-200">
            <Users className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Fair Trade Certified</h4>
            <p className="text-gray-600">Supporting artisan communities with ethical practices</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Experience the Artistry</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted lace pieces that bring timeless elegance to your home and wardrobe
          </p>
          <button onClick={onNavigateToContact} className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 shadow-lg">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
