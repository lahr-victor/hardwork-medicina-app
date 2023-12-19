import CardButton from './cardButton';

export default function Card({ Icon, title, text, buttonHref, buttonText }) {
  return (
    <section className="flex flex-col w-full gap-6 p-4 rounded-md bg-gradient-to-br from-custom-purple to-custom-pink">
      <div className="flex flex-row items-center gap-3">
        <div className="text-5xl">
          {Icon}
        </div>
        <p className="text-2xl font-extrabold uppercase">
          {title}
        </p>
      </div>
      {
        text &&
        <p className="px-4 font-bold text-shadow">
          {text}
        </p>
      }
      <div className="flex flex-row justify-end w-full">
        <CardButton
          href={buttonHref}
          text={buttonText}
        />
      </div>
    </section>
  );
}
