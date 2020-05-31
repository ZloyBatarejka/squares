import { ADD_TRY, RESTART, ADD_GUESSED, REDRAW, ADD_SCORE } from "./types";
import { IAppInitialState } from "../interfaces";
const initialState: IAppInitialState = {
  guessed: 0,
  numberOfTries: 0,
  score: 0,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TRY:
      return { ...state, numberOfTries: state.numberOfTries + 1 };
    case ADD_GUESSED:
      return { ...state, guessed: state.guessed + 1 };
    case RESTART:
      return { ...state, numberOfTries: 0 };
    case REDRAW:
      return { ...state, guessed: 0, numberOfTries: 0 };
    case ADD_SCORE:
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};
