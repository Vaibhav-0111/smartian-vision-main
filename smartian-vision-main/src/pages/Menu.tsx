import React from 'react';
import Header from '../components/layout/Header';

const Menu = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-spice bg-clip-text text-transparent">
              Coders Dabha
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Traditional Indian cuisine meets coding culture - debug your hunger with authentic flavors!
            </p>
            <div className="bg-card/50 backdrop-blur-md rounded-2xl p-12 border border-indian-saffron/20">
              <p className="text-lg text-muted-foreground">
                Complete menu with Indian tech-themed dishes coming soon...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;