import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';

export default function HomeButton() {
  return (
    <Link href="/">
      <button type="button" className="flex flex-row gap-1">
        <div className="flex items-center justify-center h-10 p-1 text-3xl text-black bg-white rounded-md w-fit">
          <GoHomeFill />
        </div>
        <p className="flex items-center justify-center text-sm font-bold">
          HOME
        </p>
      </button>
    </Link>
  );
}
