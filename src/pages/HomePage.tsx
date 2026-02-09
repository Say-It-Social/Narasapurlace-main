import { Heart, Users, Award, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigateToContact?: () => void;
  onNavigateToStory?: () => void;
}

export default function HomePage({ onNavigateToContact, onNavigateToStory }: HomePageProps) {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <section className="relative h-[600px] bg-gradient-to-r from-amber-800 to-amber-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

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
                Narasapur, a coastal town in the West Godavari district of Andhra Pradesh, has been the heart of India's crochet lace industry for over 150 years. This exquisite craft was introduced by Scottish missionaries in the late 19th century and was quickly embraced by the local community.
              </p>
              <p>
                What began as a cottage industry has flourished into a thriving tradition, with Narasapur earning the distinguished title of "Lace Town of India." The art form represents a beautiful fusion of European crochet techniques and Indian artistic sensibilities, creating pieces that are truly unique in their elegance and craftsmanship.
              </p>
              <p>
                Today, Narasapur lace is celebrated worldwide for its intricate patterns, delicate texture, and superior quality. Each piece tells a story of patience, skill, and the preservation of cultural heritage passed down through generations of dedicated artisans.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
            <div className="text-center p-8">
              <Sparkles className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">150+ Years of Tradition</p>
            </div>
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
            <div className="text-center p-8">
              <Users className="w-24 h-24 text-amber-700 mx-auto mb-4" />
              <p className="text-amber-900 font-semibold text-lg">5,000+ Women Artisans</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Women Artisans</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At the heart of Narasapur's lace industry are the skilled women artisans who breathe life into every creation. These talented craftswomen have mastered the art of crochet, often learning the skill from their mothers and grandmothers, keeping the tradition alive across generations.
              </p>
              <p>
                Our artisan community comprises over 5,000 women from Narasapur and surrounding villages who work from their homes, allowing them to balance their craft with family responsibilities. This cottage industry provides vital economic independence and has become a source of pride for these communities.
              </p>
              <p>
                Each artisan brings her own unique touch to the work, infusing traditional patterns with personal creativity. We are committed to fair trade practices, ensuring that these skilled women receive fair wages and recognition for their extraordinary talent and dedication.
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
