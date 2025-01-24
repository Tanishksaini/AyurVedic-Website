import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-sage-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">
              Our Journey in Ayurvedic Wellness
            </h1>
            <p className="text-lg text-sage-700 mb-8">
              Founded on the principles of authentic Ayurvedic traditions, DharayyAyurvedia brings
              centuries-old healing wisdom to modern wellness seekers.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-sage-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
                alt="Ayurvedic ingredients"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-sage-900 mb-6">Our Mission</h2>
              <p className="text-sage-700 mb-6">
                At DharayyAyurvedia, we're committed to preserving and sharing the authentic
                principles of Ayurveda while making them accessible to modern wellness enthusiasts.
                Our products combine traditional wisdom with contemporary research to deliver
                natural, effective solutions for holistic well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Leaf className="h-6 w-6 text-sage-700 mr-3" />
                  <span className="text-sage-900">100% Natural Ingredients</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-sage-700 mr-3" />
                  <span className="text-sage-900">Traditional Formulations</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-sage-700 mr-3" />
                  <span className="text-sage-900">Expert Practitioners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-sage-900 text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Amrita Patel",
                role: "Chief Ayurvedic Practitioner",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Dr. Raj Kumar",
                role: "Research Director",
                image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Dr. Sarah Chen",
                role: "Product Development Lead",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-serif text-sage-900 mb-2">{member.name}</h3>
                <p className="text-sage-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}