import Answer from './Answer'

export default class Clue {
  private answer: string[];

  id: string;
  question: string;

  get size() {
    return this.answer.length;
  }

  constructor(id: string, question: string, answer: string[]) {
    this.id = id;
    this.question = question;
    this.answer = answer;
  }

  checkAnswer(possibleAnswer: Answer): boolean {
    const flatAnswer = this.answer.join('');

    if (!possibleAnswer) {
      return false;
    }

    // TODO: should we check ID, too?
    return possibleAnswer.toString() === flatAnswer;
  }
}
