import GoBackButton from './goBackButton';

export default function TitleBar({ Icon, title }) {
  return (
    <div className="flex flex-row items-center justify-between w-full px-3 py-1 bg-black rounded-md">
      <GoBackButton />
      <div className="flex flex-row items-center gap-1 text-xl font-extrabold capitalize">
        <div className="text-3xl">
          {Icon}
        </div>
        {title}
      </div>
    </div>
  );
}
