'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

export default function FloodTrustBadges() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const badges = [
    { image: '/assets/images/1000++.png', alt: 'Trusted by 1000+ locals' },
    { image: '/assets/images/google2.png', alt: 'Google Certified' },
    { image: '/assets/images/fast_com.png', alt: 'Fast Communication' },
    { image: '/assets/images/IICRC.png', alt: 'IICRC Certified' },
    { image: '/assets/images/locally.png', alt: 'Locally Owned' },
    { image: '/assets/images/flexible.png', alt: 'Flexible Scheduling' },
  ];

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setVisibleCards(6);
      setCurrentIndex(0); // Reset to 0 when all cards are visible
    } else if (width >= 1024) {
      setVisibleCards(4);
    } else if (width >= 768) {
      setVisibleCards(3);
    } else if (width >= 640) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Handle Swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    const maxIndex = badges.length - visibleCards;

    if (isLeftSwipe && currentIndex < maxIndex) {
      setCurrentIndex((prev: number) => prev + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev: number) => prev - 1);
    }
  };

  return (
    <section className="py-12 md:py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-[#304462] font-medium text-[24px] md:text-[40px] lg:text-[50px] leading-tight mb-8 md:mb-14 text-center"
        >
          Why Choose Bay Ultra Dry
        </h2>

        {/* Responsive Slider Layout */}
        <div className="flex flex-col items-center">
          <div
            className="w-full relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3 flex justify-center items-center h-40"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="relative w-full h-full max-w-2xl">
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

          {/* Slider Indicators (Dots) - Only show if not all badges are visible */}
          {visibleCards < badges.length && (
            <div className="flex gap-4 mt-12">
              {Array.from({ length: badges.length - visibleCards + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-[20px] h-[20px] rounded-full border-[2.5px] transition-all duration-300 ${currentIndex === index
                    ? 'bg-[#123e7a] border-[#123e7a]'
                    : 'bg-transparent border-[#123e7a]'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


