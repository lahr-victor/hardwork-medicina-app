import Link from 'next/link';

export default function GoBackButton() {
  return (
    <Link href="/">
      <button type="button" className="py-1 text-xs font-semibold text-black capitalize bg-white rounded-full px-7">
        voltar
      </button>
    </Link>
  );
}
