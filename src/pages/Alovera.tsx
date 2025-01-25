import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
"/src/AloveraImages/a1.jpg";
"/src/AloveraImages/a2.jpg";
"/src/AloveraImages/a3.jpg";
"/src/AloveraImages/a4.jpg"
"/src/AloveraImages/a5.jpg";;
export default function AloveraPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
     "/AloveraImages/a1.jpg",
     "/AloveraImages/a2.jpg",
      "/AloveraImages/a3.jpg",
       "/AloveraImages/a4.jpg",
        "/AloveraImages/a5.jpg"
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
                alt="Alovera Gel" 
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
           Alovera Gel
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
            <p className="text-2xl font-bold text-sage-900 mb-6">₹199 per 200g</p>
            
            <p className="text-sage-700 mb-6">
            Aloe vera gel is a soothing substance extracted from the leaves of the aloe vera plant. It's packed with vitamins, minerals, and antioxidants that offer numerous benefits for your skin and hair.
            </p>

            <div className="mb-6">
              <h3 className="font-serif text-sage-900 mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-sage-700 space-y-2">
              <ul>
  <li><span className='font-bold'>Deeply Hydrates:</span> Replenishes moisture, leaving your skin feeling soft and supple.</li>
  <li><span className='font-bold'>Soothes Irritation:</span> Calms irritated skin, providing relief from sunburn, minor burns, and itching.</li>
  <li><span className='font-bold'>Promotes Healing:</span> May accelerate the healing of minor wounds and cuts.</li>
  <li><span className='font-bold'>Adds Shine to Hair:</span> When applied to hair, it can add shine, reduce frizz, and condition the scalp.</li>
</ul>
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