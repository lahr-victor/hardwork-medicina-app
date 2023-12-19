import { MdQuestionAnswer } from "react-icons/md";

import TitleBar from '@/components/ui/titleBar';
import TestSettingsButton from './components/testSettingsButton';
import TestInfoButton from './components/testInfoButton';
import StemCard from './components/stemCard';
import AlternativeCard from './components/alternativeCard';
import ConfirmationButton from './components/confirmationButton';
import questionsService from '@/services/questions';

export default async function QuestionsPage() {
  const { obj: questions } = await questionsService.retrieve();
  const currentQuestionNumber = 1;
  const currentQuestion = questions[currentQuestionNumber - 1]; // to deal with arrays starting from zero
  const { questao: stem, alternativas: alternatives } = currentQuestion;

  function convertNumberToAlphabetLetter(number) {
    const alphabetLetter = (number + 9).toString(36);
    return alphabetLetter;
  }

  return (
    <main className="min-h-[calc(100vh-8rem)] p-4 my-16 bg-neutral-100 rounded-xl gap-4 flex flex-col items-center">
      <TitleBar
        Icon={<MdQuestionAnswer />}
        title='questões'
      />
      <div className="flex flex-row justify-end w-full gap-5">
        <TestSettingsButton />
        <TestInfoButton />
      </div>
      <StemCard
        text={stem}
      />
      <div className="flex flex-col w-full gap-4">
        {alternatives.map((alternative => (
          <AlternativeCard
            key={alternative.id}
            enumerator={convertNumberToAlphabetLetter(alternative.id)}
            text={alternative.alternativa}
          />
        )))}
      </div>
      <ConfirmationButton />
    </main>
  );
}
