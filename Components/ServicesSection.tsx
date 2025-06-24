import React from 'react';

const services = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Service Name',
    desc: 'This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.'
  }
];

const ServiceCard = ({ img, title, desc, ...aosProps }: { img: string, title: string, desc: string, [key: string]: any }) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-lg transition p-6" {...aosProps}>
    <img src={img} alt={title} className="w-full max-w-xs h-32 object-cover rounded mb-4" />
    <h3 className="text-lg font-bold mb-2 text-gray-900 font-serif">{title}</h3>
    <p className="text-gray-600 text-base mb-4 text-center">{desc}</p>
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-2 transition">Book Now</button>
  </div>
);

const ServicesSection = () => (
  <section className="bg-white text-gray-900 py-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif" data-aos="fade-up" data-aos-duration="900">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {services.map((s, i) => (
        <ServiceCard key={i} img={s.img} title={s.title} desc={s.desc} data-aos="fade-up" data-aos-delay={i * 100 + 200} data-aos-duration="900" />
      ))}
    </div>
  </section>
);

export default ServicesSection; 