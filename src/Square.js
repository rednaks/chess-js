import { SQUARE_COLOR, BOARD } from './constants.js';

export default class Square {
  constructor({ row, column, color, size }) {
    this.color = color;
    this.row = row;
    this.column = column;
    this.size = size;
    this.piece = null;
    this.$el = this.__createElement();
    this.$el.onclick = this.handleClick.bind(this);
    this.__activeSquare = null;
  }

  setPiece(piece) {
    this.piece = piece;
    this.$el.appendChild(piece.$el);
  }

  handleClick() {
    if(this.piece) {
      // if(this.__activeSquare) {
      //   this.__activeSquare.classList = "square";
      // }
      // this.$el.classList = "square active";
      // this.__activeSquare = this.$el;
    }
  }

  clear() {
    if(this.piece) {
      this.$el.removeChild(this.piece.$el);
      this.piece = null;
    }
  }

  showColumnNotation() {
    const colNotation = document.createElement('div');
    colNotation.style.position = 'absolute';
    colNotation.style.bottom = '0px';
    colNotation.style.right = '1px';
    colNotation.style.fontSize = '15px';
    colNotation.innerHTML = `${BOARD.COORDINATES[this.column]}`;
    
    this.$el.appendChild(colNotation);
  }

  showRowNotation() {
    const rowNotation = document.createElement('div');
    rowNotation.style.position = 'absolute';
    rowNotation.style.top = '2px';
    rowNotation.style.left = '2px';
    rowNotation.style.fontSize = '14px';
    rowNotation.innerHTML = `${this.row + 1}`;

    this.$el.appendChild(rowNotation);
  }
  __createElement() {
    const el = document.createElement('div');
    el.className = 'square';
    el.style.justifyContent = 'center';
    el.style.alignItems = 'center';
    el.style.position = 'relative';
    el.style.display = 'flex';
    el.style.fontSize = '5em';
    el.style.backgroundColor = this.color === SQUARE_COLOR.LIGHT ? 'white' : 'grey';

    return el;
  }
}
