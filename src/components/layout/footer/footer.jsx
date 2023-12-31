import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex flex-row items-end justify-between w-full h-16 px-4 py-3 bg-custom-dark-gray">
      <Image
        src="/images/hardwork-wordmark.png"
        alt="wordmark da Hardwork Medicina"
        height={0}
        width={88}
        className="h-auto pr-3"
      />
      <div className="flex flex-col gap-1 text-xs font-light tracking-tighter text-right text-custom-light-gray">
        <p>© Copyright 2023 HWM</p>
        <p>Políticas de privacidade • Termos de uso</p>
      </div>
    </footer>
  );
}
