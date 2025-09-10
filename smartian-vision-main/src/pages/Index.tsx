import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import MenuPreview from '../components/sections/MenuPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <MenuPreview />
      </main>
    </div>
  );
};

export default Index;