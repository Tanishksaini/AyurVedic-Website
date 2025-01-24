import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Ashwagandha Root Powder",
    category: "Supplements",
    price: 24.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "Organic Ashwagandha root powder for stress relief and improved vitality."
  },
  {
    id: 2,
    name: "Triphala Supplement",
    category: "Supplements",
    price: 19.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&w=600&q=80",
    description: "Traditional digestive support blend of three fruits."
  },
  {
    id: 3,
    name: "Herbal Hair Oil",
    category: "Personal Care",
    price: 29.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1617500603321-bcd6286973b7?auto=format&fit=crop&w=600&q=80",
    description: "Nourishing blend of herbs for healthy hair growth."
  },
  {
    id: 4,
    name: "Brahmi Mind Boost",
    category: "Supplements",
    price: 22.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?auto=format&fit=crop&w=600&q=80",
    description: "Natural cognitive enhancement supplement."
  },
  {
    id: 5,
    name: "Neem Face Wash",
    category: "Personal Care",
    price: 15.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    description: "Purifying facial cleanser with neem extract."
  },
  {
    id: 6,
    name: "Turmeric Curcumin",
    category: "Supplements",
    price: 27.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "High-potency turmeric supplement for inflammation support."
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', 'Supplements', 'Personal Care'];
  const navigate=useNavigate()

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);
    
    const handleClick=(p:any)=>{
      if (p===1) {
        navigate("/products/as")
      }
      
    }

  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif text-sage-900 text-center mb-12">
          Our Ayurvedic Products
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? ' hover:bg-Mehaai-accent transition-colors duration-300 bg-Mehaai-primary text-white'
                  : 'bg-white text-sage-700 hover:bg-sage-100'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md" onClick={()=>{handleClick(product.id)}}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-sage-600">{product.category}</span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-sage-900 mb-2">{product.name}</h3>
                <p className="text-sage-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-medium text-sage-900">${product.price}</span>
                  <button className="flex items-center bg-sage-700 text-white px-4 py-2 rounded-full hover:bg-sage-800 transition-colors">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}