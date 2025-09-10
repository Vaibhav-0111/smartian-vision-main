import React from 'react';
import Header from '../components/layout/Header';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Experience our restaurant through beautiful visuals and virtual tour
            </p>
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-12 border border-indian-green/20">
              <p className="text-lg text-muted-foreground">
                Interactive gallery with Indian restaurant ambiance coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;