import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-row w-full items-center justify-between px-4 pb-3 pt-6 fixed bottom-0 bg-custom-dark-gray">
      <Image
        src="/images/hardwork-wordmark.png"
        alt="wordmark da Hardwork Medicina"
        height={25}
        width={88}
      />
      <div className="flex flex-col text-right text-xs gap-1 text-custom-light-gray">
        <p>© Copyright 2023 HWM</p>
        <p>Políticas de privacidade • Termos de uso</p>
      </div>
    </footer>
  );
}
