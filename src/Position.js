import { POSITION } from './constants.js';

export default class Position {
  constructor(position) {
    if(!position || position === 'start') {
      position = POSITION.START
    }

    this.position = position
  }

  isValid(position) {
    if(!position) {
      return false;
    }

    if (typeof position === 'string') {
       return this.__isValidFen(position);
    }
    
    return this.__isValidObjectPosition(this);
  }

  __isValidFen(fen) {
    
  }
}
