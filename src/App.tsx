import React, { useState, useEffect } from 'react';

import BentoGrid from './components/BentoGrid';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-[#111827] font-sans">
      <main className="container mx-auto px-4 py-8">
        {/* <Navbar /> */}
        <BentoGrid />
        <Analytics />
      </main>
    </div>
  );
}

export default App;