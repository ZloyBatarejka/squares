import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "./components/Box";
import { redraw, addScore } from "./redux/actions";
import { IRootState } from "./interfaces";
function App() {
  const dispatch = useDispatch();
  const firstColor = useSelector((state: IRootState) => state.color.firstColor);
  const secondColor = useSelector(
    (state: IRootState) => state.color.secondColor
  );
  const sameColorIndexes = useSelector(
    (state: IRootState) => state.color.sameColorIndexes
  );
  const score = useSelector((state: IRootState) => state.app.score);
  const guessed = useSelector((state: IRootState) => state.app.guessed);
  const numberOfSquares = 4;
  const squares = new Array(numberOfSquares).fill(numberOfSquares);
  const c = squares.map((_, index) => {
    if (index === sameColorIndexes[0] || index === sameColorIndexes[1]) {
      return <Box key={index} color={firstColor} index={index} />;
    } else {
      return <Box key={index} color={secondColor} index={index} />;
    }
  });
  useEffect(() => {
    if (guessed > 3) {
      dispatch(redraw());
      dispatch(addScore());
    }
  }, [guessed]);
  return (
    <div className="container">
      <div className="score">Score: {score}</div>
      <div className="boxes">{c}</div>
    </div>
  );
}

export default App;
