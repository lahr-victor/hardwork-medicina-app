import { MdQuestionAnswer } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdMarkChatUnread } from "react-icons/md";

import Card from './components/card';

export default function DashboardPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] p-4 my-16 bg-neutral-100 rounded-xl gap-4 flex flex-col">
      <Card
        Icon={<MdQuestionAnswer />}
        title='questões'
        text='Prepare-se de forma personalizada respondendo ao banco de questões!'
        buttonHref='/questions'
        buttonText='começar'
      />
      <Card
        Icon={<MdSettings />}
        title='personalizar'
        buttonHref='/customize'
        buttonText='acessar'
      />
      <Card
        Icon={<MdBarChart />}
        title='métricas'
        buttonText='acessar'
      />
      <Card
        Icon={<MdMarkChatUnread />}
        title='chatbot'
        text='Treine através de trívias geradas pelo nosso chatbot do Telegram.'
        buttonText='começar'
      />
    </main>
  );
}
