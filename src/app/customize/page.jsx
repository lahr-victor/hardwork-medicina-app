
import { MdSettings } from "react-icons/md";

import TitleBar from '@/components/ui/titleBar';
import Slider from './components/slider';
import QUESTIONS_CONSTANTS from '@/constants/questions';

export default async function CustomizePage() {
  const { QUESTIONS_PER_TEST } = QUESTIONS_CONSTANTS;

  return (
    <main className="min-h-[calc(100vh-8rem)] flex flex-col items-center gap-4 p-4 my-16 bg-gradient-to-t from-custom-purple to-custom-pink rounded-xl">
      <TitleBar
        Icon={<MdSettings />}
        title='personalizar'
      />
      <Slider
        title='Definir meta diária de questões:'
        min={QUESTIONS_PER_TEST.min}
        max={QUESTIONS_PER_TEST.max}
      />
    </main>
  );
}
