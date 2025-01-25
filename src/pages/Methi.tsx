import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
"/src/MethiImages/m1.jpg";
"/src/MethiImages/m2.jpg";
"/src/MethiImages/m3.jpg";
export default function MethiPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/MethiImages/m1.jpg",
    "/MethiImages/m2.jpg",
    "/MethiImages/m3.jpg"
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
                alt="Methi Seed Powder" 
                className="w-full h-96 object-contain"
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
             Methi Seeds Powder
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
            <p className="text-2xl font-bold text-sage-900 mb-6">₹190 per 200g</p>
            
            <p className="text-sage-700 mb-6">
            Methi seeds powder, derived from fenugreek seeds, is a potent spice with a slightly bitter taste.
Rich in fiber, iron, and vitamins, it aids digestion and regulates blood sugar levels.
Traditionally used in Indian cuisine, it adds depth to curries and dals.
Methi powder also possesses anti-inflammatory properties and can be used externally for skin conditions.
Incorporate it into your diet for a nutritional boost and a unique flavor dimension.
            </p>

            <div className="mb-6">
              <h3 className="font-serif text-sage-900 mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-sage-700 space-y-2">
                <li><span className='font-bold'>Blood Sugar Control:</span> May help regulate blood sugar levels.</li>
                <li><span className='font-bold'>Cholesterol Reduction:</span> Can lower cholesterol levels.</li>
                <li><span className='font-bold'>Digestive Health:</span> Improves digestion and prevents constipation.</li>
                <li><span className='font-bold'>Menstrual Relief:</span>May alleviate menstrual cramps.</li>
              </ul>
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