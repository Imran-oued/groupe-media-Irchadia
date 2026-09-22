import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4">
              <Image 
                src="/logo.jpg" 
                alt="Logo Groupe Média IRCHADI-YA" 
                width={85} 
                height={85} 
                className="object-contain mix-blend-multiply contrast-125 saturate-[1.25] brightness-105 drop-shadow-sm transition-transform hover:scale-105"
              />
              <span className="font-extrabold text-xl tracking-tight hidden sm:block leading-tight">
                <span className="text-brand-purple">GROUPE MÉDIA</span><br/>
                <span className="text-brand-green">IRCHADI-YA</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-green transition-colors font-medium">Accueil</Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-green transition-colors font-medium">À Propos</Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-green transition-colors font-medium">Départements</Link>
            <Link href="/media" className="text-gray-700 hover:text-brand-green transition-colors font-medium">Médiathèque</Link>
            <Link href="/contact" className="px-4 py-2 rounded-md bg-brand-yellow text-white hover:bg-yellow-600 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
