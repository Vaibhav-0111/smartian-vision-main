import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import anime from 'animejs';
import Hero3D from '../r3f/Hero3D';
import heroImage from '../../assets/indian-restaurant-hero.jpg';

const Hero = () => {
  useEffect(() => {
    // Animate hero elements on mount
    anime.timeline({ loop: false })
      .add({
        targets: '.hero-title',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=800')
      .add({
        targets: '.hero-buttons',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo'
      }, '-=400')
      .add({
        targets: '.hero-decoration',
        scale: [0, 1],
        rotate: [0, 360],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
      }, '-=600');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Traditional Indian Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indian-saffron/10 via-transparent to-indian-green/10"></div>
      </div>

      {/* 3D Elements */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Element */}
          <div className="hero-decoration mb-8 flex justify-center">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-indian-saffron animate-pulse-warm" />
              <div className="absolute inset-0 w-16 h-16 bg-indian-saffron/20 blur-xl rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-8xl font-heading font-black mb-6 bg-gradient-spice bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            CODERS DABHA
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Where authentic{' '}
            <span className="text-indian-saffron font-semibold">Indian flavors</span>{' '}
            meet{' '}
            <span className="text-indian-green font-semibold">coding culture</span>{' '}
            - fuel your body and mind with traditional recipes and modern vibes.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/menu"
              className="group relative px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-lg hover:shadow-warm-strong transition-all duration-300 hover:scale-105 flex items-center space-x-2 overflow-hidden"
            >
              <span className="relative z-10">Explore Menu</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              to="/reserve"
              className="group px-8 py-4 border-2 border-indian-saffron text-indian-saffron rounded-xl font-semibold text-lg hover:bg-indian-saffron hover:text-background transition-all duration-300 hover:shadow-warm flex items-center space-x-2"
            >
              <span>Book Table</span>
              <div className="w-2 h-2 bg-indian-saffron rounded-full animate-pulse"></div>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "5★", label: "Google Rating" },
              { number: "500+", label: "Developers Served" },
              { number: "24/7", label: "Coding Fuel" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="hero-decoration relative p-6 bg-card/50 backdrop-blur-md rounded-xl border border-indian-saffron/20 hover:border-indian-saffron/40 transition-all duration-300 group hover:shadow-warm"
              >
                <div className="text-3xl font-heading font-bold text-indian-saffron mb-2 group-hover:animate-glow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-indian-saffron/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indian-saffron rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;