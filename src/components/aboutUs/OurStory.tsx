'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image with Circle Badge */}
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/cleaning-supplies.jpg"
                alt="Cleaning Supplies"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Circular Badge */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-white rounded-full border-8 border-blue-600 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">↗</div>
                <p className="text-blue-600 text-sm font-semibold whitespace-nowrap px-4">
                  Get in Touch • Get in Touch • Get in Touch • Get in Touch
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">Our Story</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Since 2022, our mission at Bay Ultra Dry has been straightforward—to set the standard for reliable, high-quality cleaning and restoration in Tauranga.
              </p>
              
              <p>
                Tired of the common frustrations with tradespeople? So were we. We commit to punctuality, clear communication, and getting the job done properly without callbacks.
              </p>
              
              <p>
                We believe in working <span className="font-semibold">with you, not around you</span>. That means scheduling around your life, not ours.
              </p>
            </div>

            <Button 
              variant="primary"
              className="w-fit"
            >
              Contact Us
            </Button>

            <blockquote className="mt-6 text-lg italic text-[#1A449A] font-medium border-l-[3px] border-[#1A449A] pl-5">
              "A cleaner space creates a sharper mind. Let us transform your place so you can focus on what truly matters."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
