import React, { useState, useEffect } from 'react';
import { Leaf, Star, Heart, Users, ShieldPlus, ChevronLeft, ChevronRight, Award, Sparkles, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
"/src/HeroImages/Hero1.jpg";
"/src/HeroImages/Hero2.jpg";
"/src/HeroImages/Hero3.jpg";
"/src/AloveraImages/a1.jpg";
"/src/MultaniImages/mt1.jpg";
"/src/MethiImages/m1.jpg";
const heroSlides = [
  {
    image: "/HeroImages/Hero1.jpg",
    title: "Ancient Wisdom for Modern Wellness",
    subtitle: "Discover authentic Ayurvedic remedies crafted with centuries-old traditions"
  },
  {
    image: "/HeroImages/Hero2.jpg",
    title: "Natural Healing Solutions",
    subtitle: "Experience the power of pure, organic ingredients"
  },
  {
    image: "/HeroImages/Hero3.jpg",
    title: "Holistic Wellness Journey",
    subtitle: "Balance mind, body, and spirit with traditional Ayurvedic care"
  }
];

const testimonials = [
  {
    text: "The quality of Mehaai's products has transformed my daily wellness routine. Their Ashwagandha supplement has significantly improved my stress management.",
    author: "Sarah Johnson",
    role: "Wellness Coach",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "I've tried many Ayurvedic products, but Mehaai's authenticity and quality stand out. Their customer service is exceptional too!",
    author: "Michael Chen",
    role: "Yoga Instructor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "The Triphala supplement has done wonders for my digestive health. I'm impressed by how quickly I saw results.",
    author: "Emma Thompson",
    role: "Nutritionist",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "Mehaai's commitment to traditional Ayurvedic principles while maintaining modern standards is remarkable.",
    author: "Dr. Rajesh Patel",
    role: "Ayurvedic Practitioner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate=useNavigate()
  const handleclick=(p:any)=>{
    window.scrollTo(0, 0);
    if (p===1) {
      navigate("/products/Methi-page")
    }
    if (p===2) {
      navigate("/products/Alovera-page")
    } if (p===3) {
      navigate("/products/Multani-page")
    }}
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section with Carousel */}
      <header className="relative h-[80vh] overflow-hidden">
        {/* ... Carousel code remains the same ... */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain md:object-fill animate-scale-in"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-6 max-w-4xl animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  to="/products"
                  className="inline-block bg-Mehaai-primary text-white px-8 py-3 rounded-full hover:bg-Mehaai-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-Mehaai-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, value: "50,000+", label: "Happy Customers" },
              { icon: Award, value: "150,000+", label: "Orders Served" },
              { icon: Sparkles, value: "100%", label: "Genuine Products" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-Mehaai-dark/50 backdrop-blur-sm animate-fade-in hover:transform hover:-translate-y-1 transition-all duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-Mehaai-primary" />
                <div className="text-4xl font-bold text-Mehaai-primary mb-2">{stat.value}</div>
                <div className="text-Mehaai-beige">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-Mehaai-dark mb-12">
            Why Choose Dharay Ayurvedia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Pure ingredients sourced directly from nature's finest" },
              { icon: ShieldPlus, title: "GMP Certified", desc: "Manufactured under strict quality control standards" },
              { icon: Heart, title: "Traditional Methods", desc: "Authentic Ayurvedic principles and preparations" },
              { icon: Award, title: "Premium Quality", desc: "Highest grade ingredients and processing" },
              { icon: Clock, title: "Time-Tested", desc: "Ancient formulations refined over centuries" },
              { icon: Users, title: "Expert Support", desc: "Guidance from certified Ayurvedic practitioners" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-Mehaai-light border border-Mehaai-primary/10 animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-Mehaai-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <feature.icon className="h-8 w-8 text-Mehaai-primary" />
                </div>
                <h3 className="text-xl font-serif text-Mehaai-dark mb-2">{feature.title}</h3>
                <p className="text-Mehaai-dark/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-Mehaai-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-Mehaai-dark mb-12">
            Bestselling Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Methi Seeds Powder",
                category: "Supplements",
                price: 190,
                rating: 5,
                image: "/MethiImages/m1.jpg",
                description: "Methi seeds powder, derived from fenugreek seeds, is a potent spice with a slightly bitter taste.Rich in fiber, iron, and vitamins, it aids digestion and regulates blood sugar levels."
              },
              {
                id: 2,
                name: "Alovera Gel",
                category: "Personal Care",
                price: 199,
                rating: 4,
                image: "/AloveraImages/a1.jpg",
                description: "Aloe vera gel is a soothing substance extracted from the leaves of the aloe vera plant. It's packed with vitamins, minerals, and antioxidants that offer numerous benefits for your skin and hair."
              },
              {
                id: 3,
                name: "Multani Mitti Powder",
                category: "Personal Care",
                price: 178,
                rating: 5,
                image: "/MultaniImages/mt1.jpg",
                description: "Multani Mitti, also known as Fuller's Earth, is a type of clay that has been used for centuries in India for its beauty and health benefits. It is a fine, absorbent powder that is rich in minerals such as magnesium, calcium, and silica.."
              },
            ].map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
               onClick={()=>{handleclick(product.id)}}>
                <div className="relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif text-Mehaai-dark">{product.name}</h3>
                    <span className="text-lg font-medium text-Mehaai-primary">₹{product.price}/200g</span>
                  </div>
                  <p className="text-Mehaai-dark/80 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <button className="bg-Mehaai-primary text-white px-4 py-2 rounded-full hover:bg-Mehaai-accent transition-colors duration-300" onClick={handleclick}>
                      See more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-Mehaai-dark text-white px-8 py-3 rounded-full hover:bg-Mehaai-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-Mehaai-dark mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-Mehaai-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif text-Mehaai-dark">{testimonial.author}</h4>
                    <p className="text-sm text-Mehaai-dark/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-Mehaai-dark/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-Mehaai-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-Mehaai-beige mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Ayurvedic remedies. Join thousands of satisfied customers on their path to natural wellness.
          </p>
          <Link
            to="/products"
            className="inline-block bg-Mehaai-primary text-white px-8 py-3 rounded-full hover:bg-Mehaai-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}