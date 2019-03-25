import Piece from '../Piece.js';
import { PIECE_TYPE } from '../constants.js';

export default class Pawn extends Piece {
  constructor(color) {
    super(color, PIECE_TYPE.PAWN);
  }
}
