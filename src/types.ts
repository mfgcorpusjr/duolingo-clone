export type TImageMultipleChoiceOption = {
  id: number;
  image: string;
  text: string;
  isCorrect: boolean;
};

export type TImageMultipleChoice = {
  id: number;
  type: string;
  question: string;
  options: TImageMultipleChoiceOption[];
};

export type TOpenEnded = {
  id: number;
  type: string;
  text: string;
  answer: string;
};

export type TWordTranslationOption = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export type TWordTranslation = {
  id: number;
  type: string;
  text: string;
  options: TWordTranslationOption[];
};
