import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will respond within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-amber-100">We'd love to hear from you. Let's create something beautiful together.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-200">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-700 leading-relaxed">
              Lace Makers Street<br />
              Narasapur, West Godavari District<br />
              Andhra Pradesh 534275<br />
              India
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-200">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="block mb-2">
                <strong>Phone:</strong> +91 8074426242
              </span>
              {/* <span className="block mb-2">
                <strong>WhatsApp:</strong> +91 8856 234567
              </span>
              <span className="block">
                <strong>Toll Free:</strong> 1800 123 4567
              </span> */}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-200">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-700 leading-relaxed">
              <span className="block mb-2">
                <strong>General:</strong><br />
                info@narasapurlace.com
              </span>
              {/* <span className="block mb-2">
                <strong>Orders:</strong><br />
                orders@narasapurlace.com
              </span>
              <span className="block">
                <strong>Wholesale:</strong><br />
                wholesale@narasapurlace.com
              </span> */}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Order</option>
                      <option value="wholesale">Wholesale Request</option>
                      <option value="retail">Retail Purchase</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <Clock className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between">
                      <span className="font-semibold">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-4 pt-4 border-t">
                      * All times are Indian Standard Time (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on the Map</h3>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Google Maps Integration</p>
                  <p className="text-sm text-gray-500">Narasapur, Andhra Pradesh</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Narasapur+West+Godavari+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <p className="text-gray-700 mb-6">
                Follow us on social media for updates, new collections, and behind-the-scenes looks at our artisans at work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61582141463792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-semibold">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/corchetlace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@CorchetLace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-sky-500 text-white px-4 py-3 rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="font-semibold">YouTube</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/narasapurlace/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you with product inquiries, custom orders, wholesale requests, and anything else you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918856234567"
              className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:info@narasapurlace.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
