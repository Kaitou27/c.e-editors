import React from 'react';

const steps = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="url(#g1)"/><g filter="url(#f1)"><circle cx="24" cy="24" r="16" fill="#fff" fillOpacity="0.2"/></g><path d="M18 24h12M24 18v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><defs><radialGradient id="g1" cx="0" cy="0" r="1" gradientTransform="rotate(45) scale(48)" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#6366f1"/></radialGradient><filter id="f1" x="4" y="4" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0"/><feBlend in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/></filter></defs></svg>
    ),
    title: 'Consultations',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="url(#g2)"/><g filter="url(#f2)"><circle cx="24" cy="24" r="16" fill="#fff" fillOpacity="0.2"/></g><path d="M18 24h12M24 18v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><defs><radialGradient id="g2" cx="0" cy="0" r="1" gradientTransform="rotate(90) scale(48)" gradientUnits="userSpaceOnUse"><stop stopColor="#fbbf24"/><stop offset="1" stopColor="#f472b6"/></radialGradient><filter id="f2" x="4" y="4" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0"/><feBlend in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/></filter></defs></svg>
    ),
    title: 'Choose Package',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="url(#g3)"/><g filter="url(#f3)"><circle cx="24" cy="24" r="16" fill="#fff" fillOpacity="0.2"/></g><path d="M18 24h12M24 18v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><defs><radialGradient id="g3" cx="0" cy="0" r="1" gradientTransform="rotate(135) scale(48)" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#fbbf24"/></radialGradient><filter id="f3" x="4" y="4" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0"/><feBlend in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/></filter></defs></svg>
    ),
    title: 'Get your video',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
];

const StepCard = ({ icon, title, desc, ...aosProps }: { icon: React.ReactNode, title: string, desc: string, [key: string]: any }) => (
  <div className="flex items-start gap-5 bg-gray-100 rounded-xl shadow hover:shadow-lg transition p-6 mb-4" {...aosProps}>
    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 via-yellow-100 to-pink-100 shadow">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold mb-1 text-gray-900 font-serif">{title}</h3>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  </div>
);

const HowToOrderSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4">
      <div className="flex-1 flex flex-col items-start min-w-[320px]" data-aos="fade-up" data-aos-duration="900">
        <span className="text-pink-600 font-extrabold tracking-widest text-lg uppercase mb-4">HOW TO ORDER</span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight font-serif">Bringing your ideas to<br />life through motion.</h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">Rutrum orci mauris diam ligula senectus nulla rhoncus vivamus nec. Vivamus cubilia libero tempus potenti natoque faucibus ullamcorper mauris ultrices.</p>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-full px-8 py-3 shadow transition">Discover more</button>
      </div>
      <div className="flex-1 flex flex-col gap-6 min-w-[320px]" data-aos="fade-left" data-aos-duration="900">
        {steps.map((s, i) => (
          <StepCard key={i} icon={s.icon} title={s.title} desc={s.desc} data-aos="fade-up" data-aos-delay={i * 100 + 200} data-aos-duration="900" />
        ))}
      </div>
    </div>
  </section>
);

export default HowToOrderSection; 