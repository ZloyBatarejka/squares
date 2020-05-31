import {
  SET_FIRST_GUESS,
  SET_SECOND_GUESS,
  REDRAW,
  RESTART,
} from "./redux/types";

export interface IBoxProps {
  color: number[];
  index: number;
}
export interface IAppInitialState {
  guessed: number;
  numberOfTries: number;
  score: number;
}
export interface IColorInitialState {
  firstColor: number[];
  secondColor: number[];
  sameColorIndexes: number[];
  firstGuess: null | IGuess;
  secondGuess: null | IGuess;
}
export interface IGuess {
  color: number[];
  index: number;
}

export interface IRootState {
  app: IAppInitialState;
  color: IColorInitialState;
}
export interface ISetGuessAction {
  type: typeof SET_FIRST_GUESS | typeof SET_SECOND_GUESS;
  color: number[];
}
export interface IRe {
  type: typeof REDRAW | typeof RESTART;
}
