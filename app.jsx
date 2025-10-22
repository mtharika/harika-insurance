import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Award, Users, Clock, CheckCircle, Star, ArrowRight, Menu, X, Car, Home, Heart, Briefcase, Activity, BookOpen, AlertTriangle, Users2 } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify will handle form submission automatically
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', insuranceType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-full w-full">
                  <rect width="100" height="100" fill="#d1bd9c" />
                  <path d="M50,15 C35,15 25,25 25,40 L25,60 C25,75 35,85 50,85 C65,85 75,75 75,60 L75,40 C75,25 65,15 50,15 Z" 
                        fill="none" stroke="#ffffff" strokeWidth="4" />
                  <text x="50" y="55" fontFamily="Arial" fontSize="30" fontWeight="bold" fill="#ffffff" textAnchor="middle">H</text>
                  <line x1="30" y1="25" x2="70" y2="25" stroke="#ffffff" strokeWidth="4" />
                  <line x1="30" y1="75" x2="70" y2="75" stroke="#ffffff" strokeWidth="4" />
                </svg>
              </div>
              <div>
                <a href="https://www.linkedin.com/showcase/harika-insurance-brokerage" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
                  Harika Insurance Brokerage
                </a>
                <p className="text-sm text-gray-600">Trusted Insurance Solutions Since 1982</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
              <a href="#guides" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Guides</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Get Quote</span>
              </button>
            </nav>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#services" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#guides" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>Guides</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors w-fit">
                  Get Quote
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tailored Insurance Solutions for Lebanon</h1>
              <p className="text-xl mb-8 text-red-100">
                Protect your business, family, and future with expert advice and personalized coverage since 1982.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-4 text-red-100">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 from 2,500+ clients</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+961 70 112 424"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Type</label>
                  <select
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Insurance Type</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="umbrella">Umbrella Insurance</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-600" />
              <span className="font-medium">Since 1982</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="font-medium">2,500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-red-600" />
              <span className="font-medium">Cumberland Partner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-purple-600" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage for individuals, families, and businesses across Lebanon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Car, title: "Auto Insurance", desc: "Third-party, collision, comprehensive, personal accident & roadside assistance." },
              { icon: Home, title: "Home Insurance", desc: "Protect your property, belongings, and liability." },
              { icon: Heart, title: "Life Insurance", desc: "Term, whole life, and universal plans for your family's future." },
              { icon: Briefcase, title: "Business Insurance", desc: "Property, liability, business interruption & workers' comp." },
              { icon: Activity, title: "Health & Medical", desc: "Medical plans, expatriate coverage, travel insurance." },
              { icon: Shield, title: "Umbrella Insurance", desc: "Extra liability protection beyond standard policies." }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section - From LinkedIn */}
      <section id="guides" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance Guides & Insights</h2>
            <p className="text-xl text-gray-600">Expert advice to help you make smart insurance decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Car Insurance Guide */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <BookOpen className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Car Insurance Explained</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Third-Party Liability (mandatory)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Collision & Comprehensive Coverage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Personal Accident & Roadside Assistance</span>
                </li>
              </ul>
            </div>

            {/* Life Insurance Myths */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <Heart className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life Insurance: Myths vs Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>“Too young?” → Premiums are lower when young!</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>“Too expensive?” → Often costs less than coffee!</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>“Employer coverage enough?” → It ends when you leave!</span>
                </li>
              </ul>
            </div>

            {/* Top 5 Mistakes */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <AlertTriangle className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top 5 Insurance Mistakes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Chasing the cheapest policy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Skipping the fine print</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Underinsuring your assets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Harika Insurance Brokerage?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Independent Brokerage</h3>
                    <p className="text-gray-600">We work for you — not the insurance companies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Cumberland Partnership</h3>
                    <p className="text-gray-600">Authorized to issue policies with Lebanon’s top insurer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">40+ Years Experience</h3>
                    <p className="text-gray-600">Serving Lebanon since 1982 with personalized service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
              <Users2 className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Specialties</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Customized Business Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Personal & Family Protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Risk Assessment & Mitigation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Claims Advocacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-red-100">Get expert advice and a personalized quote today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-xl">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <p className="font-semibold">Phone</p>
              <p className="text-red-100">+961 70 112 424</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <p className="font-semibold">Email</p>
              <p className="text-red-100">mtharika@bureauharika.com</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <p className="font-semibold">Address</p>
              <p className="text-red-100 text-sm">
                6th floor, GGS2 Tower<br />
                Barbar Abou Jaoudeh Street<br />
                Baouchriyeh, Metn, Lebanon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-full w-full">
                    <rect width="100" height="100" fill="#d1bd9c" />
                    <path d="M50,15 C35,15 25,25 25,40 L25,60 C25,75 35,85 50,85 C65,85 75,75 75,60 L75,40 C75,25 65,15 50,15 Z" 
                          fill="none" stroke="#ffffff" strokeWidth="4" />
                    <text x="50" y="55" fontFamily="Arial" fontSize="30" fontWeight="bold" fill="#ffffff" textAnchor="middle">H</text>
                    <line x1="30" y1="25" x2="70" y2="25" stroke="#ffffff" strokeWidth="4" />
                    <line x1="30" y1="75" x2="70" y2="75" stroke="#ffffff" strokeWidth="4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Harika Insurance</span>
              </div>
              <p className="text-gray-400">
                Trusted insurance solutions since 1982. Protecting what matters most.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Auto Insurance</a></li>
                <li><a href="#" className="hover:text-white">Business Insurance</a></li>
                <li><a href="#" className="hover:text-white">Life Insurance</a></li>
                <li><a href="#" className="hover:text-white">Health Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+961 70 112 424</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>mtharika@bureauharika.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <a href="https://www.linkedin.com/showcase/harika-insurance-brokerage" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1">
                    <span>LinkedIn</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Harika Insurance Brokerage. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Licensed Insurance Brokerage | Serving Lebanon Since 1982 | Cumberland Insurance Partner
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
