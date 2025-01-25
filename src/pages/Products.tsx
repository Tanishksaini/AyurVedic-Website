import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
"/src/MethiImages/m1.jpg";
"/src/AloveraImages/a1.jpg";
"/src/MultaniImages/mt1.jpg";
"/src/NeemImages/n1.jpg";
"/src/PumpkinImages/p1.jpg";
"/src/ChiaImages/c1.jpg";
"/src/GondImages/g1.jpg";
const products = [
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
  {
    id: 4,
    name: "Neem powder",
    category: "Supplements",
    price: 190,
    rating: 4,
    image: "/NeemImages/n1.jpg",
    description: "Neem powder is made from dried neem leaves and is widely known for its powerful antibacterial, antifungal, and anti-inflammatory properties"
  },
  {
    id: 5,
    name: "PumpKin Seeds",
    category: "Supplements",
    price: 236,
    rating: 5,
    image: "/PumpkinImages/p1.jpg",
    description: "Pumpkin seeds are nutrient-rich seeds packed with protein, healthy fats, fiber, and essential minerals like magnesium and zinc. They are a great snack for boosting overall health and are known for their benefits to skin, hair, and heart health."
  },
  {
    id: 6,
    name: "Chia Seeds",
    category: "Supplements",
    price: 152,
    rating: 5,
    image: "/ChiaImages/c1.jpg",
    description: "Chia seeds are tiny, nutrient-dense seeds packed with fiber, protein, omega-3 fatty acids, and essential minerals like calcium and magnesium."
  },
  {
    id: 7,
    name: "Gond",
    category: "Supplements",
    price: 198,
    rating: 5,
    image: "/GondImages/g1.jpg",
    description: "Gond, or edible gum, is a natural resin extracted from tree bark, commonly used in traditional remedies and sweets. It is known for its energy-boosting properties and is especially beneficial during colder months."
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
        navigate("/products/Methi-page")
      }
      if (p===2) {
        navigate("/products/Alovera-page")
      } if (p===3) {
        navigate("/products/Multani-page")
      }
      if (p===4) {
        navigate("/products/Neem-page")
      }
      if (p===5) {
        navigate("/products/Pumpkin-page")
      }
      if (p===6) {
        navigate("/products/Chia-page")
      }
      if (p===7) {
        navigate("/products/Gond-page")
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md" onClick={()=>{handleClick(product.id)}}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain"
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
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-medium text-sage-900">₹{product.price} per 200g</span>
                  <button className="bg-Mehaai-primary text-white px-4 py-2 rounded-full hover:bg-Mehaai-accent transition-colors duration-300" onClick={handleClick}>
                     See More
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