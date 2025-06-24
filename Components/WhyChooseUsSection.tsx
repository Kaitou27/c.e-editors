import React from 'react';

const features = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#e6007a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4"/><path d="M16 20h16M16 28h8"/><circle cx="36" cy="36" r="2.5"/><path d="M12 36l4-8 4 8"/></svg>
    ),
    title: 'Certified Expert',
    desc: 'Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum'
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#e6007a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="20" rx="3"/><polygon points="20,20 32,24 20,28"/><rect x="10" y="14" width="28" height="20" rx="3"/></svg>
    ),
    title: 'Clean Editing',
    desc: 'Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum'
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#e6007a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" rx="4"/><rect x="14" y="18" width="20" height="12" rx="2"/><path d="M14 30h20"/></svg>
    ),
    title: 'Affordable Price',
    desc: 'Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum'
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#e6007a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4"/><path d="M16 20h16M16 28h8"/><circle cx="36" cy="36" r="2.5"/><path d="M36 36v-4M36 36h4"/></svg>
    ),
    title: '24/7 Support',
    desc: 'Letius bibendum posuere enim facilisi magnis massa integer mi inceptos sollicitudin viverra nunc gravida interdum'
  },
];

const FeatureCard = ({ icon, title, desc, ...aosProps }: { icon: React.ReactNode, title: string, desc: string, [key: string]: any }) => (
  <div className="bg-gray-100 text-gray-900 rounded-xl flex items-start gap-6 p-8 shadow hover:shadow-lg transition min-h-[140px] cursor-pointer relative group" {...aosProps}>
    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 shadow group-hover:scale-110 transition">
      {icon}
    </div>
    <div className="text-left">
      <h3 className="text-xl font-bold mb-1 font-serif">{title}</h3>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  </div>
);

const WhyChooseUsSection = () => (
  <section className="bg-white py-24 relative overflow-hidden">
    <div className="absolute -top-20 -right-32 w-[520px] h-[320px] bg-gradient-to-br from-pink-400 via-blue-400 to-purple-400 opacity-20 rounded-full blur-3xl z-0" />
    <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
      <span className="text-pink-600 font-extrabold tracking-widest text-lg uppercase mb-4 block" data-aos="fade-up" data-aos-duration="900">WHY CHOOSE US</span>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight font-serif" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">We make your business look<br />good.</h2>
      <div className="w-20 h-1.5 mx-auto mb-10 rounded bg-gradient-to-r from-pink-500 to-blue-500 opacity-70" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} data-aos="fade-up" data-aos-delay={i * 100 + 200} data-aos-duration="900" />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection; 