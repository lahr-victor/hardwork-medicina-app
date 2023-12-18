import Link from 'next/link';

export default function CardButton({ href = '/', text }) {
  return (
    <Link href={href}>
      <button
        type="button"
        className="px-10 py-1 font-bold text-black capitalize bg-white rounded-full shadow-md shadow-black"
      >
        {text}
      </button >
    </Link>
  );
}
