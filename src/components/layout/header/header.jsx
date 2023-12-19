import Image from 'next/image';
import Link from 'next/link';

import HomeButton from '@/components/ui/homeButton';

export default function Header() {
  return (
    <header className="fixed top-0 flex flex-row items-center justify-between w-full px-4 py-3 bg-custom-dark-gray">
      <Link href="/">
        <Image
          src="/images/hardwork-full-logo.svg"
          alt="logo da Hardwork Medicina"
          height={0}
          width={0}
          className="w-auto h-10 pr-3"
        />
      </Link>
      <div className="flex flex-row items-center gap-4">
        <HomeButton />
        <Image
          src="/images/profile.jpg"
          alt="foto de perfil do usuário"
          height={0}
          width={40}
          className="w-auto rounded-md"
        />
      </div>
    </header>
  );
}
