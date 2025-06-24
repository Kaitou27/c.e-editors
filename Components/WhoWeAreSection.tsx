import React from 'react';

const WhoWeAreSection = () => (
  <section className="bg-white py-20 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
      <div className="flex-1 flex flex-col items-start min-w-[320px]" data-aos="fade-up" data-aos-duration="900">
        <span className="text-pink-600 font-extrabold tracking-widest text-2xl uppercase mb-4">WHO WE ARE</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight font-serif">Video production that's<br />creative and affordable.</h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">Nunc ridiculus efficitur inceptos felis lectus. Odio iaculis cras sem magnis interdum. Augue a maximus libero commodo diam euismod laoreet faucibus himenaeos rutrum.</p>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-3 shadow transition">Discover more</button>
      </div>
      <div className="flex-1 flex items-center justify-center min-w-[320px] relative" data-aos="fade-left" data-aos-duration="900">
        <div className="relative rounded-xl overflow-hidden border-8 border-gray-200 shadow-xl w-[420px] h-[270px] bg-gray-100 z-10">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Video Editor" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/>
              <polygon points="25,20 45,30 25,40" fill="#7c3aed"/>
            </svg>
          </span>
        </div>
        <div className="absolute -top-10 -right-16 w-[340px] h-[160px] bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-20 rounded-2xl blur-2xl z-0" />
      </div>
    </div>
  </section>
);

export default WhoWeAreSection; 