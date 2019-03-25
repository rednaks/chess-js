import { PIECE_COLOR } from './constants.js';
import Pawn from './pieces/Pawn.js';
import Knight from './pieces/Knight.js';
import Bishop from './pieces/Bishop.js';
import Rook from './pieces/Rook.js';
import Queen from './pieces/Queen.js';
import King from './pieces/King.js';

export default class PieceFactory {
  createPiece(name) {
    switch(name) {
      case 'wP': return new Pawn(PIECE_COLOR.WHITE);
      case 'wN': return new Knight(PIECE_COLOR.WHITE);
      case 'wB': return new Bishop(PIECE_COLOR.WHITE);
      case 'wR': return new Rook(PIECE_COLOR.WHITE);
      case 'wQ': return new Queen(PIECE_COLOR.WHITE);
      case 'wK': return new King(PIECE_COLOR.WHITE);
      case 'bP': return new Pawn(PIECE_COLOR.BLACK);
      case 'bN': return new Knight(PIECE_COLOR.BLACK);
      case 'bB': return new Bishop(PIECE_COLOR.BLACK);
      case 'bR': return new Rook(PIECE_COLOR.BLACK);
      case 'bQ': return new Queen(PIECE_COLOR.BLACK);
      case 'bK': return new King(PIECE_COLOR.BLACK);
    }
  }
}
