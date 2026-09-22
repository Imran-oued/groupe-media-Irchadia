import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-xl shadow-md inline-flex items-center justify-center h-[90px] w-[90px] transition-transform hover:scale-105">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo IRCHADI-YA" 
                  width={80} 
                  height={80} 
                  className="object-contain mix-blend-multiply contrast-125 saturate-[1.25] brightness-105" 
                />
              </div>
              <h3 className="text-xl font-extrabold leading-tight text-brand-yellow">
                Groupe Média<br/>IRCHADI-YA
              </h3>
            </div>
            <p className="text-purple-100">
              Informer avec professionnalisme, éduquer avec sagesse et unir les musulmans dans le respect des valeurs de l'Islam.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-brand-green">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brand-yellow transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="hover:text-brand-yellow transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="hover:text-brand-yellow transition-colors">Départements</Link></li>
              <li><Link href="/media" className="hover:text-brand-yellow transition-colors">Médiathèque</Link></li>
              <li><Link href="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-brand-red">Contact</h4>
            <p className="text-purple-100">Ouagadougou, Burkina Faso</p>
            <p className="text-purple-100 mt-2">Tél: (+226) 67 27 42 32 / (+226) 58 96 98 67</p>
            <p className="text-purple-100 mt-2">Email: groupemediairchadiya@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; {new Date().getFullYear()} Groupe Média IRCHADI-YA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
