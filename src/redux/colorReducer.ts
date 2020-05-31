import {
  SET_FIRST_GUESS,
  SET_SECOND_GUESS,
  CANCEL_GUESSES,
  REDRAW,
} from "./types";
import { randomRGBgenerator, twoRandomIndexesGenerator } from "../generators";
const initialState = {
  firstColor: randomRGBgenerator(),
  secondColor: randomRGBgenerator(),
  sameColorIndexes: twoRandomIndexesGenerator(),
  firstGuess: null,
  secondGuess: null,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FIRST_GUESS:
      return { ...state, firstGuess: action.payload };
    case SET_SECOND_GUESS:
      return { ...state, secondGuess: action.payload };
    case CANCEL_GUESSES:
      return { ...state, firstGuess: null, secondGuess: null };
    case REDRAW:
      return {
        ...state,
        firstColor: randomRGBgenerator(),
        secondColor: randomRGBgenerator(),
        sameColorIndexes: twoRandomIndexesGenerator(),
        firstGuess: null,
        secondGuess: null,
      };
    default:
      return state;
  }
};
