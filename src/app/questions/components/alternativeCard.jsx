export default function AlternativeCard({ enumerator, text }) {
  return (
    <div className="flex items-center gap-4 p-4 text-black rounded-md shadow-md shadow-neutral-500 bg-neutral-300">
      <div className="text-3xl font-extrabold uppercase">
        {enumerator}
      </div>
      <p className="text-xs">
        {text}
      </p>
    </div>
  );
}
