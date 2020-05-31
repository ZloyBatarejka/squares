import {
  ADD_TRY,
  RESTART,
  SET_FIRST_GUESS,
  SET_SECOND_GUESS,
  CANCEL_GUESSES,
  REDRAW,
  ADD_GUESSED,
  ADD_SCORE,
} from "./types";
import { ThunkDispatch } from "redux-thunk";
import {
  IGuess,
  IAppInitialState,
  IColorInitialState,
  IRe,
} from "../interfaces";

export const addTry = () => {
  return { type: ADD_TRY };
};

export const restart = () => {
  return (
    dispatch: ThunkDispatch<
      IAppInitialState | IColorInitialState,
      undefined,
      IRe
    >
  ) => {
    dispatch({ type: RESTART });
  };
};

export const setFirstGuess = (guess: IGuess) => {
  return { type: SET_FIRST_GUESS, payload: guess };
};
export const setSecondGuess = (guess: IGuess) => {
  return { type: SET_SECOND_GUESS, payload: guess };
};

export const cancelGuesses = () => {
  return { type: CANCEL_GUESSES };
};

export const redraw = () => {
  return (
    dispatch: ThunkDispatch<
      IAppInitialState | IColorInitialState,
      undefined,
      IRe
    >
  ) => {
    setTimeout(() => {
      dispatch({ type: REDRAW });
    }, 1000);
  };
};

export const addGuessed = () => {
  return {
    type: ADD_GUESSED,
  };
};

export const addScore = () => {
  return { type: ADD_SCORE };
};
