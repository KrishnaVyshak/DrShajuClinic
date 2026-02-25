import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Star, Facebook, Twitter, Instagram, Linkedin, Youtube, Shield, Clock, Heart, Award, Sparkles, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navTheme, setNavTheme] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      if (!scrolled) {
        setNavTheme('transparent');
        return;
      }
      
      try {
        const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
        const section = elements.find(el => el.tagName.toLowerCase() === 'section' || el.tagName.toLowerCase() === 'footer');
        
        if (section) {
          const className = section.className || '';
          if (className.includes('bg-[#051114]') || className.includes('bg-[#0a2f35]')) {
            setNavTheme('dark');
          } else {
            setNavTheme('light');
          }
        } else {
          setNavTheme('light');
        }
      } catch (e) {
        setNavTheme('light');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between font-sans transition-all duration-300 ${navTheme === 'transparent' ? 'bg-transparent text-white' : navTheme === 'dark' ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] text-[#0a2f35]' : 'bg-white/60 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] text-[#0a2f35]'}`}>
        {/* Left side: Logo */}
        <div className="flex items-center relative z-10 w-[200px]">
          <img src="/logo.png" alt="Dr. Shaju's Dental Clinic Logo" className="w-10 h-10 shrink-0 object-contain drop-shadow-sm" />
          <div className={`absolute left-12 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'w-[150px] opacity-100' : 'w-0 opacity-0'}`}>
            <div className="flex flex-col justify-center whitespace-nowrap px-1">
              <span className="font-biz text-[18px] text-[#0a2f35] leading-none mb-0.5 mt-1 font-bold">Dr. SHAJU'S</span>
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#009bb3] font-semibold">Dental Clinic</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className={`transition-colors ${isScrolled ? 'hover:text-[#009bb3]' : 'text-white/90 hover:text-white'}`}>About Us</a>
          <a href="#services" className={`transition-colors ${isScrolled ? 'hover:text-[#009bb3]' : 'text-white/90 hover:text-white'}`}>Services</a>
          <a href="#facilities" className={`transition-colors ${isScrolled ? 'hover:text-[#009bb3]' : 'text-white/90 hover:text-white'}`}>Our facilities</a>
          <a href="#patient-voices" className={`transition-colors ${isScrolled ? 'hover:text-[#009bb3]' : 'text-white/90 hover:text-white'}`}>Patient voices</a>
          <a href="#contact" className={`transition-colors ${isScrolled ? 'hover:text-[#009bb3]' : 'text-white/90 hover:text-white'}`}>Contact us</a>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#contact" className={`px-5 py-2 flex items-center justify-center font-sans rounded-2xl transition-colors ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}>Contact</a>
          <a href="#schedule" className="btn-primary flex items-center justify-center text-sm !px-5 !py-2 shadow-lg shadow-[#009bb3]/20">Book appointment</a>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#0a2f35] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0a2f35] flex flex-col items-center justify-center gap-8 text-white font-sans text-xl pt-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00ebff] transition-colors">Services</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00ebff] transition-colors">About Us</a>
        <a href="#facilities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00ebff] transition-colors">Our facilities</a>
        <a href="#patient-voices" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00ebff] transition-colors">Patient voices</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00ebff] transition-colors">Contact us</a>
        <div className="flex flex-col gap-4 mt-8 w-64 max-w-[80vw]">
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full px-5 py-3 border border-white/20 rounded-2xl hover:bg-white/10 transition-colors text-base font-medium">Contact</a>
          <a href="#schedule" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center btn-primary w-full px-5 py-3 text-base shadow-lg shadow-[#009bb3]/20">Book Appointment</a>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#051114]">
    {/* Dynamic Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" 
        alt="Clinic Background" 
        className="w-full h-full object-cover opacity-40 animate-ken-burns origin-center"
      />
      {/* Refined Premium Gradients */}
      <div className="absolute inset-0 bg-[#051114]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2f35]/90 via-[#0a2f35]/60 to-transparent"></div>
      
      {/* Aesthetic glowing orbs - toned down */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#009bb3] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#0a2f35] rounded-full blur-[150px] opacity-30"></div>
    </div>
    
    <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full max-w-[90rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-16">
      <div className="max-w-2xl lg:w-3/5">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-[#009bb3]"></span>
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase font-sans">Premium Dental Care</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[4.5rem] font-biz text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Dr. Shaju's<br/>
          Best Care<br/>
          <span className="text-[#009bb3] italic font-light">Dental Clinic</span>
        </h1>
        
        <div className="pt-4 border-[#009bb3]/40 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 font-sans font-light">
            Experience high-class dental care in a peaceful, state-of-the-art environment. We are dedicated to providing a <span className="text-white font-medium">zero-pain experience</span> in all our procedures.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="btn-primary w-full sm:w-auto text-sm group relative overflow-hidden flex items-center justify-center gap-2">
              Book Appointment <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary-dark w-full sm:w-auto text-sm">
              Explore Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elite Element */}
      <div className="hidden lg:flex lg:w-2/5 flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="relative animate-float">
          {/* Glass Card */}
          <div className="absolute inset-0 bg-[#009bb3]/10 blur-xl rounded-3xl transform"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col gap-6 transform">
            <div className="flex justify-between items-start gap-12">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Success Rate</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl text-white font-biz font-light">99.8</span>
                  <span className="text-[#009bb3] text-2xl font-bold">%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Star className="w-5 h-5 text-[#009bb3] fill-current" />
              </div>
            </div>
            
            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
            
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-[#051114] object-cover relative z-30" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-[#051114] object-cover relative z-20" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-[#051114] object-cover relative z-10" />
              <div className="w-10 h-10 rounded-full border-2 border-[#051114] bg-white flex items-center justify-center relative z-0">
                <span className="text-[#0a2f35] text-[10px] font-bold">+1k</span>
              </div>
            </div>
            <p className="text-white/80 text-sm font-sans font-light leading-relaxed">Trusted by thousands of<br/>happy patients.</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute hidden lg:flex bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
      <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
      <div className="w-px h-16 bg-gradient-to-b from-[#00ebff] via-[#009bb3] to-transparent"></div>
    </div>
  </section>
);

const Commitment = () => (
  <section id="about" className="relative bg-white py-16 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent"></div>
    <div className="absolute -left-40 bottom-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply blur-[120px] opacity-40"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl ring-1 ring-black/5">
          <img 
            src="/a1.jpg" 
            alt="Dr. Shaju" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 p-5 rounded-2xl shadow-xl">
            <div className="text-4xl font-biz text-white mb-1">15+</div>
            <div className="text-[10px] text-white/90 uppercase tracking-widest font-bold">Years Experience</div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-[#0a2f35]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-sans font-bold">About The Doctor</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-biz mb-8 leading-[1.1]">
          A legacy of<br/>
          <span className="text-[#009bb3] font-light italic">dental excellence</span>
        </h2>
        <p className="text-gray-500 font-sans mb-10 leading-relaxed text-base md:text-lg font-light">
          Dr. Shaju brings years of clinical expertise and a genuine passion for patient care. The clinic serves as a testament to providing priority patient care in an environment that seamlessly combines soft skills and clinical excellence.
        </p>
        <div className="flex items-center gap-8">
          <button className="btn-primary shadow-[0_0_20px_rgba(14,152,176,0.2)] hover:shadow-[0_0_25px_rgba(14,152,176,0.3)]">
            Explore Profile
          </button>
          <button className="group flex items-center gap-2 text-sm font-semibold text-[#0a2f35] hover:text-[#009bb3] transition-colors">
            Our Mission <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, desc, img, isLarge }) => (
  <div className={`group bg-white rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 ${isLarge ? 'md:col-span-1 md:row-span-2' : ''}`}>
    <div className={`p-8 md:p-10 flex-grow relative ${isLarge ? 'z-10' : ''}`}>
      {isLarge && <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-8"><span className="text-[10px] uppercase tracking-widest text-[#009bb3] font-bold">Featured Service</span></div>}
      <h3 className={`${isLarge ? 'text-3xl md:text-4xl mb-4' : 'text-xl mb-3'} font-biz text-[#0a2f35] leading-tight group-hover:text-[#009bb3] transition-colors`}>
        {title}
      </h3>
      <p className={`text-gray-500 font-sans font-light ${isLarge ? 'mb-10 text-lg max-w-sm' : 'mb-6 text-sm leading-relaxed'}`}>
        {desc}
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        {isLarge && (
          <button className="btn-primary text-sm !px-6 !py-2.5">
            Book Session
          </button>
        )}
        <button className="flex items-center gap-2 text-sm font-semibold text-[#0a2f35] group-hover:text-[#009bb3] transition-colors">
          Learn More <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
    
    <div className={`${isLarge ? 'mt-auto aspect-[4/3] relative overflow-hidden' : 'mt-auto h-48 relative overflow-hidden'}`}>
      <div className="absolute inset-0 bg-[#0a2f35]/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
      <img src={img} alt="Service" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply blur-[100px] opacity-60 pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Treatments</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-biz text-[#0a2f35] mb-6 tracking-tight">Complete dental care</h2>
        <p className="text-gray-500 font-sans text-lg font-light max-w-2xl mx-auto">From routine checkups to complex cosmetic procedures, maintaining the highest standards of precision and comfort.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard 
          isLarge={true}
          title={<>General dentistry<br/>and checkups</>}
          desc="Regular twice-yearly exams and state-of-the-art X-rays to proactively maintain your oral health."
          img="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
        />
        
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ServiceCard 
            title="Teeth whitening"
            desc="Brighten your smile safely with professional gels and laser technology."
            img="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title={<>Braces and<br/>aligners</>}
            desc="Precise realignment solutions you need to act on for a confident smile."
            img="https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title={<>Dental<br/>implants</>}
            desc="Secure, ready-to-act replacements for missing teeth with lasting results."
            img="https://images.unsplash.com/photo-1609918438269-9a4c5f8fe3a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <ServiceCard 
            title={<>Children's<br/>dentistry</>}
            desc="Gentle, specialized care designed specifically for tiny growing smiles."
            img="https://images.unsplash.com/photo-1733817336090-04082ff6ab4f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  </section>
);

const Facilities = () => (
  <section id="facilities" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-50 rounded-full mix-blend-multiply blur-[100px] opacity-70 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Clinic Environment</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-biz text-[#0a2f35] mb-8 leading-[1.1]">
          Modern technology<br/>
          <span className="text-[#009bb3] font-light italic">& advanced care</span>
        </h2>
        <p className="text-gray-500 font-sans mb-10 text-lg leading-relaxed font-light">
          The clinic uses state of the art diagnostic tools and maintains the highest sterilization protocols. The latest technology offers maximum comfort and safety during treatment.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a href="#gallery" className="btn-primary shadow-lg shadow-[#0e98b0]/20">
            Take a Tour
          </a>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#f8fafc] border border-gray-100 flex items-center justify-center">
              <Star className="w-5 h-5 text-[#009bb3] fill-current" />
            </div>
            <span className="text-sm font-semibold text-[#0a2f35]">ISO Certified<br/><span className="text-gray-400 font-normal">Environment</span></span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -inset-4 bg-gradient-to-bl from-teal-100/50 to-transparent rounded-[2.5rem] transform rotate-3"></div>
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 group">
          <img 
            src="/b.jpg" 
            alt="Medical Team" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  </section>
);

const Schedule = () => (
  <section id="schedule" className="relative py-20 md:py-40 flex items-center justify-center bg-[#051114] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
        alt="Building Overlay" 
        className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051114] via-[#0a2f35]/90 to-[#051114]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009bb3] rounded-full mix-blend-screen blur-[150px] opacity-20 animate-pulse"></div>
    </div>
    
    <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-[#00ebff] animate-pulse"></span>
        <span className="text-[10px] uppercase tracking-widest text-white/90 font-bold">Start Your Journey</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-biz text-white mb-6 tracking-tight">
        Schedule your<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">appointment</span>
      </h2>
      <p className="text-white/60 font-sans text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
        Join thousands of satisfied patients. Book your consultation today and experience dental care tailored to you.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-lg mx-auto bg-white/5 p-1.5 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
        <input 
          type="email" 
          placeholder="Enter your email address..." 
          className="w-full bg-transparent border-none text-white placeholder-white/40 px-4 py-3 focus:outline-none font-sans text-sm"
        />
        <button className="btn-primary w-full sm:w-auto px-6 py-3 text-sm shadow-[0_0_20px_rgba(14,152,176,0.3)]">
          Request Booking
        </button>
      </div>
    </div>
  </section>
);

const reviewsData = [
  {
    name: "Jo Mac",
    role: "5 months ago",
    review: "The doctors are very professional, friendly, and make sure you feel comfortable throughout the treatment. The clinic is clean, well maintained, and the staff is very supportive. Highly recommend for anyone looking for quality dental care in this area near Pallipuram.",
    avatar: "https://ui-avatars.com/api/?name=Jo+Mac&background=009bb3&color=fff"
  },
  {
    name: "Santhi Krishna",
    role: "7 months ago",
    review: "Recently visited the clinic for my routine dental checkup. Amazing service from Dr. Ashley. She is not only incredibly knowledgeable and professional, but also genuinely kind and caring.",
    avatar: "https://ui-avatars.com/api/?name=Santhi+Krishna&background=009bb3&color=fff"
  },
  {
    name: "Nichu",
    role: "5 months ago",
    review: "I came here for my dental routine and the experience is amazing and their treatment is good.",
    avatar: "https://ui-avatars.com/api/?name=Nichu&background=009bb3&color=fff"
  },
  {
    name: "vivek appues",
    role: "a year ago",
    review: "I recently visited this clinic for a routine checkup and was impressed by the dentist's expertise and attention to detail. The clinic uses state of the art equipment, and the staff is knowledgeable and friendly. The dentist took the time to explain my treatment options and answered all my questions. Thanks.",
    avatar: "https://ui-avatars.com/api/?name=vivek+appues&background=009bb3&color=fff"
  },
  {
    name: "finto simon",
    role: "6 months ago",
    review: "I had went to this clinic. They are professional. Good behaviour, very neat and clean, affordable rate.",
    avatar: "https://ui-avatars.com/api/?name=finto+simon&background=009bb3&color=fff"
  },
  {
    name: "Suja Krishna",
    role: "a year ago",
    review: "Had a wonderful experience at this dental clinic. Dr Ashly was very friendly and accommodating. I came in for a dental checkup and was impressed by the thoroughness of the examination. Affordable rates too.",
    avatar: "https://ui-avatars.com/api/?name=Suja+Krishna&background=009bb3&color=fff"
  },
  {
    name: "sayana K",
    role: "5 months ago",
    review: "The doctors and nurses there were very friendly and helped me a lot with my tooth ache.",
    avatar: "https://ui-avatars.com/api/?name=sayana+K&background=009bb3&color=fff"
  },
  {
    name: "Insta techs",
    role: "a year ago",
    review: "My grandmother got partial dentures here and she is very happy with them. The dentist was patient with her and ensured the dentures fit perfectly. Affordable option in this locality.",
    avatar: "https://ui-avatars.com/api/?name=Insta+techs&background=009bb3&color=fff"
  },
  {
    name: "ᴀ ᴅ ɪ ᴛ ʜ",
    role: "5 months ago",
    review: "Got better experience and services from this clinic, services are actually quite customer friendly.",
    avatar: "https://ui-avatars.com/api/?name=ᴀ+ᴅ+ɪ+ᴛ+ʜ&background=009bb3&color=fff"
  },
  {
    name: "Aarcha Chandran",
    role: "a year ago",
    review: "I am so glad I found this clinic near VSSC. They provided excellent orthodontic treatment for my daughter. The orthodontist was patient and explained everything clearly. Highly recommend.",
    avatar: "https://ui-avatars.com/api/?name=Aarcha+Chandran&background=009bb3&color=fff"
  },
  {
    name: "Akash Akash",
    role: "6 months ago",
    review: "Excellent care and very good service. Doctors were very friendly and polite.",
    avatar: "https://ui-avatars.com/api/?name=Akash+Akash&background=009bb3&color=fff"
  },
  {
    name: "SREESHNA T T",
    role: "3 years ago",
    review: "I done my root canal treatment with crown from here and it was awesome. Her work is clean, perfect and never painful. During the consultation doctor explained the procedure that had to be done. My only concern was the pain associated with it.",
    avatar: "https://ui-avatars.com/api/?name=SREESHNA+T+T&background=009bb3&color=fff"
  },
  {
    name: "Rajesh Raj",
    role: "5 months ago",
    review: "Good atmosphere, best doctors and staffs. Highly recommend clinic.",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Raj&background=009bb3&color=fff"
  },
  {
    name: "Siya N",
    role: "a year ago",
    review: "I have never felt more comfortable at a dental clinic. The staff is incredibly friendly and professional. Highly recommend. Thank you Dr Ashly Shajumon.",
    avatar: "https://ui-avatars.com/api/?name=Siya+N&background=009bb3&color=fff"
  },
  {
    name: "Sharath P",
    role: "5 months ago",
    review: "Staffs are very helping and doctor is friendly. Also cheap in fees.",
    avatar: "https://ui-avatars.com/api/?name=Sharath+P&background=009bb3&color=fff"
  },
  {
    name: "Joyal John",
    role: "a year ago",
    review: "The removable dentures I got here are comfortable and well made. The dentist took the time to ensure they were just right. Affordable option near VSSC as well.",
    avatar: "https://ui-avatars.com/api/?name=Joyal+John&background=009bb3&color=fff"
  },
  {
    name: "Unni Maya",
    role: "a year ago",
    review: "Excellent care at Best Care Dental Clinic. The dentist was professional, kind, and made me feel comfortable. Will definitely be back.",
    avatar: "https://ui-avatars.com/api/?name=Unni+Maya&background=009bb3&color=fff"
  },
  {
    name: "Sreelal S",
    role: "3 years ago",
    review: "I came here for my wife dental treatment. Treatment was very affordable. Doctor and staff are very friendly and polite. They explained each detail clearly. Happy with the service provided.",
    avatar: "https://ui-avatars.com/api/?name=Sreelal+S&background=009bb3&color=fff"
  },
  {
    name: "ATHULYA RAJ",
    role: "3 years ago",
    review: "One of the affordable clinics which I came across. Doctors were very friendly and they explained each detail very clearly. One of the finest clinics and thank you so much for your help and patience throughout the process in one year.",
    avatar: "https://ui-avatars.com/api/?name=ATHULYA+RAJ&background=009bb3&color=fff"
  },
  {
    name: "Jishad bn",
    role: "3 years ago",
    review: "Did root canal treatment. Just 30 mins, I was relieved from severe pain. So happy with the result. Doctor was very polite and friendly.",
    avatar: "https://ui-avatars.com/api/?name=Jishad+bn&background=009bb3&color=fff"
  },
  {
    name: "Sajitha Xavier",
    role: "5 months ago",
    review: "I had a best experience in this clinic.",
    avatar: "https://ui-avatars.com/api/?name=Sajitha+Xavier&background=009bb3&color=fff"
  },
  {
    name: "NEETHU RAJ R K",
    role: "5 months ago",
    review: "Good service and hygienic. Highly recommended.",
    avatar: "https://ui-avatars.com/api/?name=NEETHU+RAJ+R+K&background=009bb3&color=fff"
  },
  {
    name: "Ashfin K",
    role: "4 months ago",
    review: "Best root canal treatment in here.",
    avatar: "https://ui-avatars.com/api/?name=Ashfin+K&background=009bb3&color=fff"
  },
  {
    name: "Sangeetha",
    role: "8 months ago",
    review: "Excellent care and very good service. Doctors were very friendly and polite.",
    avatar: "https://ui-avatars.com/api/?name=Sangeetha&background=009bb3&color=fff"
  }
];

const ReviewCard = ({ name, role, review, avatar }) => (
  <div className="group flex flex-col bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative h-full">
    <div className="absolute top-6 right-8 text-8xl text-gray-50 font-biz leading-none select-none group-hover:text-[#009bb3]/5 transition-colors duration-500">"</div>
    
    <div className="flex text-[#009bb3] mb-8 gap-1 relative z-10">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="font-biz text-base md:text-lg text-[#0a2f35] mb-12 leading-relaxed relative z-10">
      {review}
    </p>
    <div className="mt-auto flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50" />
      <div>
        <h4 className="font-bold text-[#0a2f35]">{name}</h4>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">{role}</p>
      </div>
    </div>
  </div>
);

const PatientVoices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviewsData.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    if (maxIndex > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(c => (c < maxIndex ? c + 1 : 0));
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [maxIndex]);

  const prev = () => setCurrentIndex(c => (c > 0 ? c - 1 : maxIndex));
  const next = () => setCurrentIndex(c => (c < maxIndex ? c + 1 : 0));

  return (
    <section id="patient-voices" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6 mx-auto md:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
              <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-biz text-[#0a2f35] tracking-tight">Patient voices</h2>
          </div>
          <p className="text-gray-500 font-sans text-lg font-light max-w-sm text-center md:text-right ml-auto">Real experiences from those who trust our care and have transformed their smiles.</p>
        </div>
        
        <div className="overflow-hidden mb-16 px-4 -mx-4">
          <div 
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
            style={{ transform: `translateX(calc(-${currentIndex * 100}% / ${itemsPerView}))` }}
          >
            {reviewsData.map((review, i) => (
              <div key={i} className="shrink-0 w-full md:w-1/3 px-4 flex">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-6 sm:gap-4">
          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center w-full sm:w-auto">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 shrink-0 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#0a2f35] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2 shrink-0 sm:ml-auto">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0a2f35] hover:text-white hover:border-[#0a2f35] transition-all duration-300 text-[#0a2f35]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0a2f35] hover:text-white hover:border-[#0a2f35] transition-all duration-300 text-[#0a2f35]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdvantageCard = ({ icon, title, desc }) => (
  <div className="group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#009bb3]/30 transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009bb3]/40 to-transparent flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-biz text-white mb-3 group-hover:text-[#00ebff] transition-colors">{title}</h3>
    <p className="text-white/60 font-sans text-sm leading-relaxed">{desc}</p>
  </div>
);

const WhyChooseUs = () => (
  <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0a2f35] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#009bb3] rounded-full mix-blend-screen blur-[150px] opacity-20 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#051114] rounded-full mix-blend-multiply blur-[100px] opacity-50 pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ebff]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#00ebff] font-sans font-bold">Our Edge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-biz text-white mb-8 leading-tight">
            Why patients<br/>choose <span className="text-[#009bb3] italic font-light">us</span>
          </h2>
          <p className="text-white/70 font-sans mb-10 leading-relaxed text-lg font-light">
            We don't just treat teeth; we build lasting relationships based on trust, unparalleled expertise, and a commitment to your absolute comfort.
          </p>
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-4 text-white">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5"><Award className="w-5 h-5 text-[#00ebff]"/></div>
               <div>
                 <div className="font-bold font-sans">Award Winning Clinic</div>
                 <div className="text-sm text-white/50">Recognized for excellence in care</div>
               </div>
            </div>
            <div className="flex items-center gap-4 text-white">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5"><Heart className="w-5 h-5 text-[#00ebff]"/></div>
               <div>
                 <div className="font-bold font-sans">Patient-First Approach</div>
                 <div className="text-sm text-white/50">Your comfort is our top priority</div>
               </div>
            </div>
          </div>
          <button className="btn-primary shadow-[0_0_20px_rgba(14,152,176,0.2)] hover:shadow-[0_0_25px_rgba(14,152,176,0.3)]">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AdvantageCard 
            icon={<Shield className="w-6 h-6 text-[#00ebff]" />}
            title="Advanced Safety"
            desc="We adhere to the strictest global sterilization and hygiene protocols to ensure a completely safe environment."
          />
          <AdvantageCard 
            icon={<Sparkles className="w-6 h-6 text-[#00ebff]" />}
            title="Zero-Pain Dentistry"
            desc="Experience treatments designed to minimize discomfort, using the latest anesthetic techniques for anxiety-free visits."
          />
          <AdvantageCard 
            icon={<Star className="w-6 h-6 text-[#00ebff]" />}
            title="Expert Specialists"
            desc="Our team comprises highly trained specialists who bring decades of combined experience in various fields of dentistry."
          />
          <AdvantageCard 
            icon={<Clock className="w-6 h-6 text-[#00ebff]" />}
            title="Respect For Time"
            desc="We pride ourselves on punctuality. Your appointment starts on time, and we optimize our processes for efficiency."
          />
        </div>
      </div>
    </div>
  </section>
);

const ClinicGallery = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);

  const additionalImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ];

  return (
    <section id="gallery" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-teal-50 rounded-full mix-blend-multiply blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6 mx-auto md:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
              <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-biz text-[#0a2f35] tracking-tight">Our Clinic</h2>
          </div>
          <p  className="text-gray-500 font-sans text-lg font-light max-w-sm text-center md:text-right ml-auto">Take a look inside our state-of-the-art dental facility designed for your utmost comfort and safety.</p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Main 2 Highlighted Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg ring-1 ring-black/5">
              <img src="/a.jpg" alt="Modern Reception" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2f35]/90 via-[#0a2f35]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-white font-biz text-3xl mb-2">Modern Reception</h3>
                        <p className="text-white/80 font-sans text-sm tracking-wide">Welcoming atmosphere for all patients</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg ring-1 ring-black/5 mt-0 md:mt-12">
              <img src="/b.jpg" alt="Modern Reception" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2f35]/90 via-[#0a2f35]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-white font-biz text-3xl mb-2">Invisalign Treatment</h3>
                        <p className="text-white/80 font-sans text-sm tracking-wide">Orthodontics</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Gallery Extended Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${showFullGallery ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
            <div className="overflow-hidden col-span-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalImages.map((src, index) => (
                  <div key={index} className="group relative rounded-3xl overflow-hidden aspect-square shadow-md ring-1 ring-black/5">
                    <img src={src} alt="Clinic Space" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#0a2f35]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowFullGallery(!showFullGallery)} 
            className="btn-secondary"
          >
            {showFullGallery ? 'Hide Gallery' : 'View Full Gallery'}
          </button>
        </div>
      </div>
    </section>
  );
};

const faqsData = [
  {
    question: "Do you accept emergency dental appointments?",
    answer: "Yes, we prioritize dental emergencies. We reserve specific time slots every day to cater to patients experiencing acute pain, trauma, or urgent dental issues. Please call our dedicated emergency line immediately if you need urgent care."
  },
  {
    question: "What insurance plans are accepted at the clinic?",
    answer: "We accept most major dental insurance plans. Our front desk staff is highly experienced in navigating insurance benefits and will provide a detailed breakdown of costs before any treatment begins to ensure complete transparency."
  },
  {
    question: "Is professional teeth whitening safe for my enamel?",
    answer: "Absolutely. Professional teeth whitening supervised by our dentists is the safest and most effective way to brighten your smile. We use customized trays and professional-grade gels that protect your enamel while lifting deep stains without causing sensitivity."
  },
  {
    question: "How often should I schedule a routine dental checkup?",
    answer: "We recommend scheduling a comprehensive checkup and professional cleaning every six months. However, depending on your individual oral health status, we might suggest more frequent visits to maintain optimal dental hygiene and catch issues early."
  }
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="group border border-gray-100 bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
    <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
      <h4 className={`text-xl font-biz pr-8 leading-tight ${isOpen ? 'text-[#009bb3]' : 'text-[#0a2f35] group-hover:text-[#009bb3]'} transition-colors`}>{question}</h4>
      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${isOpen ? 'bg-[#009bb3] text-white border-[#009bb3]' : 'bg-gray-50 text-[#0a2f35] border-gray-100 group-hover:border-[#009bb3]/30'}`}>
        <span className="text-xl font-light leading-none">{isOpen ? '−' : '+'}</span>
      </div>
    </div>
    <div className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
      <div className="overflow-hidden">
        <div className="text-gray-500 font-sans text-base leading-relaxed border-t border-gray-50 pt-6">
          {answer}
        </div>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#009bb3]/5 rounded-full mix-blend-multiply blur-[120px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Answers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-biz text-[#0a2f35] tracking-tight mb-6">Common questions</h2>
          <p className="text-gray-500 font-sans text-lg font-light max-w-2xl mx-auto">Everything you need to know about our clinic, treatments, and what to expect during your first visit.</p>
        </div>
        
        <div className="flex flex-col gap-5">
          {faqsData.map((faq, index) => (
            <FaqItem 
              key={index}
              isOpen={openIndex === index}
              question={faq.question}
              answer={faq.answer}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#009bb3]/5 rounded-full mix-blend-multiply blur-[120px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2f35]/5 border border-[#0a2f35]/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009bb3]"></span>
          <span className="text-[10px] uppercase tracking-widest text-[#0a2f35] font-bold">Location & Info</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-biz text-[#0a2f35] tracking-tight mb-6">Contact & Location</h2>
        <p className="text-gray-500 font-sans text-lg font-light max-w-2xl mx-auto">We're here to help you achieve the perfect smile. Reach out to us for appointments, inquiries, or emergencies.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 border border-gray-50 group-hover:bg-[#009bb3]/5 transition-colors duration-300">
            <Phone className="w-6 h-6 text-[#009bb3] transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-biz text-[#0a2f35] mb-3 group-hover:text-[#009bb3] transition-colors">Call Us</h3>
          <p className="text-[#0a2f35] font-sans font-medium text-lg mb-1">+91 94976 73267</p>
          {/* <p className="text-gray-500 font-sans text-xs uppercase tracking-widest">Emergency: +91 98765 43211</p> */}
        </div>

        <div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 border border-gray-50 group-hover:bg-[#009bb3]/5 transition-colors duration-300">
            <Mail className="w-6 h-6 text-[#009bb3] transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-biz text-[#0a2f35] mb-3 group-hover:text-[#009bb3] transition-colors">Email Us</h3>
          <p className="text-[#0a2f35] font-sans font-medium text-base mb-1">drshajubestdentalclinic@gmail.com [SAMPLE]</p>
          {/* <p className="text-gray-500 font-sans text-xs uppercase tracking-widest">info@drshajudental.com</p> */}
        </div>

        <div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 border border-gray-50 group-hover:bg-[#009bb3]/5 transition-colors duration-300">
            <MapPin className="w-6 h-6 text-[#009bb3] transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-biz text-[#0a2f35] mb-3 group-hover:text-[#009bb3] transition-colors">Location</h3>
          <p className="text-[#0a2f35] font-sans font-medium text-base mb-1">Dr. Shaju's Best Care Dental Clinic</p>
          <p className="text-gray-500 font-sans text-sm">opposite Primary Health Centre, Andoorkonam, Kerala, 695584</p>
        </div>

        <div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 border border-gray-50 group-hover:bg-[#009bb3]/5 transition-colors duration-300">
            <Clock className="w-6 h-6 text-[#009bb3] transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-biz text-[#0a2f35] mb-3 group-hover:text-[#009bb3] transition-colors">Hours</h3>
          <p className="text-[#0a2f35] font-sans font-medium text-base mb-1">Mon - Sun</p>
          <p className="text-gray-500 font-sans text-sm uppercase tracking-widest">9AM - 8PM</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0a2f35] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 font-sans border-t border-white/10 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#009bb3]/10 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00ebff]/5 rounded-full mix-blend-screen blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
      <div className="flex flex-col items-center mb-16 text-center">
        <img src="/logo.png" alt="Dr. Shaju's Dental Clinic Logo" className="w-20 h-20 mb-6 object-contain drop-shadow-lg" />
        <h2 className="text-4xl md:text-5xl font-biz text-white mb-8 tracking-tight">
          Dr. Shaju's Best Care <span className="text-[#009bb3] italic font-light">Dental Clinic</span>
        </h2>
        
        <div className="w-16 h-px bg-white/20 mb-8"></div>
        
        <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-6 font-bold">Key Services</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-[#00ebff] transition-colors relative group">
            General Dentistry
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ebff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#00ebff] transition-colors relative group">
            Teeth Whitening
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ebff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#00ebff] transition-colors relative group">
            Braces & Aligners
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ebff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#00ebff] transition-colors relative group">
            Dental Implants
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ebff] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-[#00ebff] transition-colors relative group">
            Children's Dentistry
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ebff] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <button className="btn-primary mt-12 text-sm px-8 py-3 group relative overflow-hidden flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(14,152,176,0.2)] hover:shadow-[0_0_25px_rgba(14,152,176,0.3)]">
          Book Appointment <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-widest text-center md:text-left">
        <span>© {new Date().getFullYear()} DR. SHAJU'S BEST CARE DENTAL CLINIC</span>
        <span>Built by <a href="#" className="text-white/70 hover:text-[#00ebff] transition-colors font-semibold">Krishnavyshak</a></span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#009bb3] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Commitment />
        <WhyChooseUs />
        <Services />
        <Facilities />
        <ClinicGallery />
        <Schedule />
        <FAQ />
        <PatientVoices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
