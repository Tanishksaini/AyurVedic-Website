import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AshwagandhaPowder() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576016770956-d2486aad0c89?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600813456857-638da11eac53?auto=format&fit=crop&w=800&q=80"
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Incredible stress relief! I've noticed a significant improvement in my overall well-being.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 4,
      text: "High-quality powder. Helps me maintain energy throughout the day.",
      date: "1 month ago"
    }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={images[currentImage]} 
                alt="Ashwagandha Root Powder" 
                className="w-full h-96 object-cover"
              />
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2"
              >
                <ChevronRight />
              </button>
            </div>
            <div className="flex space-x-2 mt-4 justify-center">
              {images.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentImage === index ? 'bg-Mehaai-primary' : 'bg-sage-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-serif text-sage-900 mb-4">
              Ashwagandha Root Powder
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < 5 ? 'text-yellow-500 fill-current' : 'text-sage-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sage-600">(5.0) 50 Reviews</span>
            </div>
            <p className="text-2xl font-bold text-sage-900 mb-6">$24.99</p>
            
            <p className="text-sage-700 mb-6">
              Our organic Ashwagandha Root Powder is a potent adaptogenic herb traditionally used in Ayurvedic medicine to support stress relief, enhance vitality, and promote overall well-being. Sourced from premium organic farms and carefully processed to preserve maximum nutritional value.
            </p>

            <div className="mb-6">
              <h3 className="font-serif text-sage-900 mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-sage-700 space-y-2">
                <li>Reduces stress and anxiety</li>
                <li>Supports energy and stamina</li>
                <li>Promotes mental clarity</li>
                <li>Supports immune system</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <input 
                type="number" 
                defaultValue="1" 
                min="1" 
                className="w-20 px-3 py-2 border rounded-md text-center"
              />
              <button className="flex-1 bg-Mehaai-primary text-white px-6 py-2 rounded-full hover:bg-Mehaai-accent transition-colors flex items-center justify-center">
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-sage-900 mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sage-600">{review.date}</span>
                </div>
                <p className="text-sage-700 italic">"{review.text}"</p>
                <div className="mt-4 font-medium text-sage-900">- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}