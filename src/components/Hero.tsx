import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 sm:pt-24 lg:pt-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">GROUPE MÉDIA</span>{' '}
                <span className="block text-brand-purple">IRCHADI-YA</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Informer avec professionnalisme, éduquer avec sagesse et unir les musulmans dans le respect des valeurs de l&apos;Islam.
              </p>
              <p className="mt-3 text-sm font-bold text-brand-green uppercase tracking-wide">
                La lumière de l&apos;Islam dans toute sa gloire
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-purple hover:bg-purple-900 md:py-4 md:text-lg md:px-10 transition-colors">
                    En savoir plus
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-purple bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10 transition-colors">
                    Nos départements
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-brand-green/10 flex items-center justify-center min-h-[300px] lg:min-h-full">
        <div className="text-brand-green opacity-20">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 3.83L18.17 19H5.83L12 5.83z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
