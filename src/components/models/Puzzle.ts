import Answer from './Answer';
import CluePosition from './CluePosition';

export default class Puzzle {
  readonly height: number;
  readonly width: number;

  answers: Map<string, Answer>;
  board: CluePosition[];

  constructor(height: number, width: number, board: CluePosition[]) {
    this.height = height;
    this.width = width;
    this.board = board;
    this.answers = new Map();
  }

  addAnswer(answer: Answer): void {
    this.answers.set(answer.clueId, answer);
  }

  checkPuzzle(): boolean {
    for (const { clue } of this.board) {
      const possibleAnswer = this.answers.get(clue.id);
      const isCorrect = clue.checkAnswer(possibleAnswer.toString());

      if (!isCorrect) {
        return false;
      }
    }

    return true;
  }
}
