import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const latestNews = [
    {
      id: 1,
      title: "Lancement de notre nouveau site web",
      excerpt: "Découvrez notre nouvelle plateforme numérique conçue pour mieux vous informer et vous éduquer.",
      date: "21 Septembre 2026",
      category: "Média et Communication"
    },
    {
      id: 2,
      title: "Conférence sur la paix et le vivre-ensemble",
      excerpt: "Rejoignez-nous ce week-end pour une conférence spéciale animée par nos érudits.",
      date: "18 Septembre 2026",
      category: "Événementiel"
    },
    {
      id: 3,
      title: "Nouvelle série d'émissions sur la fraternité",
      excerpt: "Notre département de production audiovisuelle lance une nouvelle série abordant les valeurs de la fraternité.",
      date: "15 Septembre 2026",
      category: "Production audiovisuelle"
    }
  ];

  return (
    <>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Dernières <span className="text-brand-purple">Actualités</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Restez informés des dernières activités et publications du Groupe Média IRCHADI-YA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-brand-green">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-brand-yellow uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link href={`/media`} className="text-brand-purple font-medium hover:text-purple-900 flex items-center transition-colors">
                    Lire la suite
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/media" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-purple bg-purple-100 hover:bg-purple-200 transition-colors">
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
