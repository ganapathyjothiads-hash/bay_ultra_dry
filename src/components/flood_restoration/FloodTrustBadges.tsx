'use client';

import Image from 'next/image';

export default function FloodTrustBadges() {
  const badges = [
    { image: '/assets/images/1000++.png', alt: 'Trusted by 1000+ locals' },
    { image: '/assets/images/google2.png', alt: 'Google Certified' },
    { image: '/assets/images/fast_com.png', alt: 'Fast Communication' },
    { image: '/assets/images/IICRC.png', alt: 'IICRC Certified' },
    { image: '/assets/images/locally.png', alt: 'Locally Owned' },
    { image: '/assets/images/flexible.png', alt: 'Flexible Scheduling' },
  ];

  return (
    <section className="py-12 md:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Fixed Heading */}
        <h2
          data-aos="fade-up"
          className="text-[#304462] font-medium text-[24px] md:text-[40px] lg:text-[50px] leading-tight mb-6 text-center"
        >
          Why Choose Bay Ultra Dry
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center justify-center">
          {badges.map((badge, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-2xl h-40">
                <Image
                  src={badge.image}
                  alt={badge.alt}
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}