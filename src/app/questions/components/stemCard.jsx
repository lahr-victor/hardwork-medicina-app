export default function QuestionCard({ text }) {
  return (
    <p className="flex w-full p-3 text-sm font-bold text-white bg-black rounded-md shadow-md shadow-neutral-500">
      {text}
    </p>
  );
}
