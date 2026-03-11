'use client';

import InfoCard from '@/components/ui/InfoCard';

export default function TrustBadges() {
  const badges = [
    {
      icon: '👥',
      title: '1000+',
      description: 'of locals across Tauranga.',
      label: 'Trusted by.',
    },
    {
      icon: '⭐',
      title: 'Google',
      description: 'Fully Insured & Safety Certified',
      label: '★ ★ ★ ★ ★',
      hasGoogleLogo: true,
    },
    {
      icon: '🌍',
      title: 'IICRC',
      description: 'Fully Insured & Safety Certified',
      label: 'IICRC Certified',
      hasIIRCLogo: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Why Choose Bay Ultra Dry?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trusted By Card */}
          <InfoCard variant="default" className="p-8 text-center">
            <p className="text-sm font-semibold text-gray-600 mb-2">Trusted by.</p>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">1000+</h3>
            <p className="text-gray-700">of locals across Tauranga.</p>
          </InfoCard>

          {/* Google Card */}
          <InfoCard variant="default" className="p-8 flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-blue-500 font-bold text-2xl">G</span>
              <span className="text-red-500 font-bold text-2xl">o</span>
              <span className="text-yellow-500 font-bold text-2xl">o</span>
              <span className="text-blue-500 font-bold text-2xl">g</span>
              <span className="text-green-500 font-bold text-2xl">l</span>
              <span className="text-red-500 font-bold text-2xl">e</span>
            </div>
            <p className="text-sm text-gray-700">Fully Insured & Safety Certified</p>
          </InfoCard>

          {/* IICRC Certified Card */}
          <InfoCard variant="default" className="p-8 flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-2xl">
              🌐
            </div>
            <p className="text-sm font-semibold text-gray-600 mb-2">IICRC</p>
            <h3 className="text-lg font-bold text-slate-900 text-center mb-2">Fully Insured & Safety Certified</h3>
            <p className="text-xs text-gray-600">IICRC Certified</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
