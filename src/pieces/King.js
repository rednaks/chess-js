import Piece from '../Piece.js';
import { PIECE_TYPE } from '../constants.js';

export default class King extends Piece {
  constructor(color) {
    super(color, PIECE_TYPE.KING);
  }
}
