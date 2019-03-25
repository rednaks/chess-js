export const BOARD = {
  SIZE: 8,
  COORDINATES: { 
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7,
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h'
  }
};

export const SQUARE_COLOR = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const PIECE_COLOR = {
  WHITE: 'white',
  BLACK: 'black'
};

export const PIECE_TYPE = {
  KING: 'king',
  QUEEN: 'queen',
  ROOK: 'rook',
  BISHOP: 'bishop',
  KNIGHT: 'knight',
  PAWN: 'pawn'
};

export const POSITION = {
  START_FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  START: {
    wP: ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    wN: ['b0', 'g0'],
    wB: ['c0', 'f0'],
    wR: ['a0', 'h0'],
    wQ: ['d0'],
    wK: ['e0'],
    bP: ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    bN: ['b7', 'g7'],
    bB: ['c7', 'f7'],
    bR: ['a7', 'h7'],
    bQ: ['d7'],
    bK: ['e7']
  }
};

export const DEFAULT_CFG = {
  container: 'body',
  position: 'start',
  orientation: 'white',
  dragAndDrop: false,
  showLegalMoves: true,
  showNotation: true
}