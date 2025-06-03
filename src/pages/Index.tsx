
import { useState } from "react";
import { Menu, X, Zap, Home, Lightbulb, Gauge, Cpu, Shield, Smartphone } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Smart Lighting",
      description: "Transform your regular lights into smart, automated lighting systems with motion sensors and energy monitoring."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Energy Monitoring", 
      description: "Track your home's energy usage in real-time and optimize consumption to save money on electricity bills."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Integration",
      description: "Connect any device to your local network and integrate with Home Assistant for seamless automation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Systems",
      description: "Smart sensors and monitoring systems to keep your home safe with automated alerts and responses."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Remote Control",
      description: "Control all your smart devices from anywhere within your local network using your smartphone or voice commands."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "3D printed modifications and custom automation solutions tailored to your specific needs."
    }
  ];

  const galleryItems = [
    {
      title: "Smart Motor Control",
      description: "Automated gate system with remote monitoring",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "Home Automation Hub",
      description: "Central control system for all smart devices",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      title: "Smart Lighting System",
      description: "Motion-activated LED lighting with energy monitoring",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    },
    {
      title: "Connected Living Room",
      description: "Complete smart home transformation",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Smartify</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-cyan-400 transition-colors">
                Gallery
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors py-2">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors py-2">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-cyan-400 transition-colors py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-cyan-400 transition-colors py-2">
                  Gallery
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Smartify
                </span>
                <br />
                Your World
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ordinary devices into intelligent, connected systems. 
                Save time, money, and energy with custom smart home automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Explore Services
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-colors"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Smartify</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Revolutionizing Home Automation</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                At Smartify, we specialize in transforming your everyday "dumb" devices into intelligent, 
                connected systems. From motors and lights to security systems and energy monitors, 
                we make everything smart and interconnected.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Using cutting-edge technology including Home Assistant integration, 3D printing for custom 
                modifications, and advanced sensors, we create personalized automation solutions that 
                save you time, money, and energy.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our expertise includes radar presence sensors, energy monitoring systems, custom IoT 
                integrations, and much more. No project is too complex – if you can imagine it, 
                we can smartify it.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-gray-300">Possibilities</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">System Monitoring</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-cyan-600/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Custom Solutions</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">Fresh</div>
                <div className="text-gray-300">Startup Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple device automation to complete smart home transformations, 
              we offer comprehensive solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of smart home transformations and custom automation projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Ready to smartify your home? Contact us through your preferred platform and let's discuss your automation needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
              </svg>
              WhatsApp
            </a>
            
            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            
            <a
              href="https://instagram.com/your-account"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.165-.948-.729-1.594-1.708-1.938-2.937-.344-1.229-.229-2.482.345-3.76.573-1.277 1.437-2.297 2.592-3.059 1.154-.762 2.443-1.143 3.865-1.143 1.422 0 2.712.381 3.866 1.143 1.154.762 2.018 1.782 2.592 3.059.573 1.278.688 2.531.344 3.76-.344 1.229-.99 2.208-1.938 2.937-.948.73-2.099 1.165-3.396 1.165h-.001z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">Smartify</span>
          </div>
          <p className="text-gray-400">
            © 2024 Smartify. Making the world smarter, one device at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
