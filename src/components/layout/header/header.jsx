import Image from 'next/image';

import HomeButton from '@/components/ui/homeButton';

export default function Header() {
  return (
    <header className="flex flex-row w-full items-center justify-between px-4 py-3 fixed top-0 bg-custom-dark-gray">
      <Image
        src="/images/hardwork-full-logo.svg"
        alt="logo da Hardwork Medicina"
        height={0}
        width={150}
      />
      <div className="flex flex-row items-center gap-4">
        <HomeButton />
        <Image
          src="/images/profile.jpg"
          alt="foto de perfil do usuário"
          height={0}
          width={40}
          className="rounded-md"
        />
      </div>
    </header>
  );
}
