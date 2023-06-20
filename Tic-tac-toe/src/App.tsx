import { useState } from "react";
import "./App.css";
import Box from "./components/box";
function App() {
  const winningSteps = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [boxList, setBoxValue] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    setBoxValue(Array(9).fill(null));

    setGameOver(false);
  };

  const handleClickEvent = (index: number) => {
    setBoxValue((array) => {
      const newArr = [...array];

      if (!newArr[index]) newArr[index] = X === true ? "X" : "O";
      checkWinner(newArr);
      return newArr;
    });
    setX((pValue) => !pValue);
  };

  const checkWinner = (arr: any[]) => {
    winningSteps.map((items) => {
      const [x, y, z] = items;

      if (arr[x] && arr[x] === arr[y] && arr[x] === arr[z]) {
        setGameOver((pValue) => !pValue);
        setWinner(boxList[x]);
      }
    });
  };

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      {boxList && !gameOver && (
        <div className="board">
          {boxList.map((item, index) => (
            <Box
              key={index}
              player={item}
              id={index}
              onClickBtn={handleClickEvent}
            ></Box>
          ))}
        </div>
      )}
      {gameOver && (
        <div style={{ display: "block", fontSize: "5rem" }}>
          🎉 {winner} player is winner 🎉{" "}
        </div>
      )}
      <button className="resetbtn" onClick={() => resetGame()}>
        Reset
      </button>
    </div>
  );
}

export default App;
