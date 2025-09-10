import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ChefHat, ArrowRight } from 'lucide-react';
import anime from 'animejs';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
  isSignature?: boolean;
}

const MenuPreview = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Sample menu items
  const featuredItems: MenuItem[] = [
    {
      id: '1',
      name: 'Debug Biryani',
      description: 'Fragrant basmati rice with tender lamb, aromatic spices, and perfectly timed layers - no bugs here!',
      price: 18,
      category: 'Main Course',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      prepTime: '25 min',
      isSignature: true
    },
    {
      id: '2',
      name: 'Async Butter Chicken',
      description: 'Creamy tomato curry that processes in parallel with fluffy naan - perfectly non-blocking comfort food',
      price: 16,
      category: 'Main Course', 
      image: '/api/placeholder/400/300',
      rating: 4.8,
      prepTime: '20 min'
    },
    {
      id: '3',
      name: 'Chai.js (Masala Chai)',
      description: 'Unit-tested blend of traditional spices and black tea - guaranteed to pass all your energy tests',
      price: 4,
      category: 'Beverages',
      image: '/api/placeholder/400/300',
      rating: 5.0,
      prepTime: '5 min',
      isSignature: true
    }
  ];

  useEffect(() => {
    // Animate cards on scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.menu-card',
              translateY: [100, 0],
              opacity: [0, 1],
              rotateX: [45, 0],
              delay: anime.stagger(200),
              duration: 1000,
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const menuSection = document.querySelector('.menu-preview-section');
    if (menuSection) observer.observe(menuSection);

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (itemId: string | null) => {
    setHoveredItem(itemId);
    
    if (itemId) {
      anime({
        targets: `[data-item="${itemId}"]`,
        scale: [1, 1.05],
        rotateY: [0, 5],
        duration: 300,
        easing: 'easeOutQuart'
      });
    }
  };

  return (
    <section className="menu-preview-section py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="w-8 h-8 text-indian-saffron mr-3" />
            <span className="text-indian-saffron font-medium text-lg">Featured Dishes</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tech-Spiced Menu
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with traditional Indian spices and techniques, 
            designed to fuel your coding sessions and satisfy your taste buds.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              data-item={item.id}
              className="menu-card group relative bg-card backdrop-blur-md rounded-2xl overflow-hidden border border-border hover:border-indian-saffron/50 transition-all duration-500 hover:shadow-warm transform-gpu perspective-1000"
              onMouseEnter={() => handleCardHover(item.id)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {/* Signature Badge */}
              {item.isSignature && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold animate-pulse-warm">
                  Signature
                </div>
              )}

              {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-indian-saffron/20 to-indian-green/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChefHat className="w-16 h-16 text-indian-saffron/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-indian-saffron/60 rounded-full animate-float`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-indian-saffron transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-bold text-indian-turmeric">
                    ${item.price}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center text-indian-turmeric">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="px-2 py-1 bg-muted/50 rounded-md text-xs text-muted-foreground">
                    {item.category}
                  </div>
                </div>

                {/* Hover Action */}
                <div className={`transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="w-full py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-warm-strong transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Order Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-card border-2 border-indian-saffron text-indian-saffron rounded-xl font-semibold text-lg hover:bg-indian-saffron hover:text-background transition-all duration-300 hover:shadow-warm"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;