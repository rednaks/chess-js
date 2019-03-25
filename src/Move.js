export default class Move {
  constructor(from, to) {
    console.log('Move creation');
    this.from = from;
    this.to = to;
    this.comments = null;
    this.timeSpent = null;
    this.number = null;
  }
}
