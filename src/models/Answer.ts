export default class Answer {
  readonly clueId: string;

  value: string[];

  constructor(clueId: string) {
    this.clueId = clueId;
    this.value = [];
  }

  toString() {
    return this.value.join('');
  }
}
