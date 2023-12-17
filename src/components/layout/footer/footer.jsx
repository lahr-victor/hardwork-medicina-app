import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex flex-row items-center justify-between w-full px-4 pt-6 pb-3 bg-custom-dark-gray">
      <Image
        src="/images/hardwork-wordmark.png"
        alt="wordmark da Hardwork Medicina"
        height={25}
        width={88}
      />
      <div className="flex flex-col gap-1 text-xs text-right text-custom-light-gray">
        <p>© Copyright 2023 HWM</p>
        <p>Políticas de privacidade • Termos de uso</p>
      </div>
    </footer>
  );
}
