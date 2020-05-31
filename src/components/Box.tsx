import React, { useState, useEffect } from "react";
import {
  addTry,
  setFirstGuess,
  setSecondGuess,
  cancelGuesses,
  restart,
  addGuessed,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IBoxProps, IRootState } from "../interfaces";
const Box: React.FC<IBoxProps> = ({ color, index }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [colored, setColored] = useState(false);
  const firstGuess = useSelector((state: IRootState) => state.color.firstGuess);
  const secondGuess = useSelector(
    (state: IRootState) => state.color.secondGuess
  );
  const numberOfTries = useSelector(
    (state: IRootState) => state.app.numberOfTries
  );
  const guessed = useSelector((state: IRootState) => state.app.guessed);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (checkForSame()) {
      setTimeout(() => {
        if (index === firstGuess?.index || index === secondGuess?.index) {
          dispatch(addGuessed());
          setHide(checkForSame());
        }
        dispatch(cancelGuesses());
      }, 1000);
    }
  }, [firstGuess, secondGuess]);
  useEffect(() => {
    if (numberOfTries > 1) {
      setClicked(true);
      setTimeout(() => {
        dispatch(restart());
        setColored(false);
        setClicked(false);
        dispatch(cancelGuesses());
      }, 1000);
    }
  }, [numberOfTries]);
  useEffect(() => {
    if (guessed > 3) {
      setHide(false);
    }
  }, [guessed]);
  const style = {
    backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
  };
  const checkForSame = () => {
    if (firstGuess && secondGuess) {
      return firstGuess.color.join("") === secondGuess.color.join("");
    }
    return false;
  };
  const handleClicker = () => {
    dispatch(addTry());
    numberOfTries > 0
      ? dispatch(setFirstGuess({ color, index }))
      : dispatch(setSecondGuess({ color, index }));
    setColored(true);
    setClicked(true);
  };
  function gap(): void {}
  let classes = ["box", hide ? "hide" : "block"];
  return (
    <div
      style={colored ? style : {}}
      className={classes.join(" ")}
      onClick={clicked ? gap : handleClicker}
    ></div>
  );
};

export default Box;
