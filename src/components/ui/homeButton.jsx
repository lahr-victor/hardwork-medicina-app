import Link from 'next/link';
import { GoHomeFill } from 'react-icons/go';

export default function HomeButton() {
  return (
    <Link href="/">
      <button type="button" className="flex flex-row gap-1">
        <div className="h-10 w-fit p-1 flex items-center justify-center rounded-md text-3xl bg-white text-black">
          <GoHomeFill />
        </div>
        <p className="flex items-center justify-center text-sm font-bold">
          HOME
        </p>
      </button>
    </Link>
  );
}
