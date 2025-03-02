import React, { useState, useEffect } from "react";
import "./TicTacToe.css"; // Ensure you have CSS for styling

const TicTacToe = ({ isOpen, onClose }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isPlayingAgainstAI, setIsPlayingAgainstAI] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(checkWinner(newBoard));
  };

  useEffect(() => {
    if (isPlayingAgainstAI && !isXNext && !winner) {
      const aiMove = () => {
        const availableSpots = board
          .map((val, index) => (val === null ? index : null))
          .filter((val) => val !== null);
        if (availableSpots.length > 0) {
          const randomIndex = availableSpots[Math.floor(Math.random() * availableSpots.length)];
          const newBoard = board.slice();
          newBoard[randomIndex] = "O";
          setBoard(newBoard);
          setIsXNext(true);
          setWinner(checkWinner(newBoard));
        }
      };
      setTimeout(aiMove, 500);
    }
  }, [isXNext, isPlayingAgainstAI, winner, board]);

  const status = winner
    ? `🎉 Winner: ${winner}! 🎉`
    : board.includes(null)
    ? isPlayingAgainstAI && !isXNext
      ? "🤖 Computer's Turn..."
      : `🔹 Next Player: ${isXNext ? "X" : "O"}`
    : "It's a Draw!";

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsPlayingAgainstAI(null);
  };

  if (!isOpen) return null;

  return (
    <div className="tic-tac-toe-modal">
      <div className="tic-tac-toe-container">
        <h2 className="game-title">Tic Tac Toe 🎮</h2>
        {isPlayingAgainstAI === null ? (
          <div className="mode-selection">
            <button className="mode-btn" onClick={() => setIsPlayingAgainstAI(true)}>🤖 Play Against AI</button>
            <button className="mode-btn" onClick={() => setIsPlayingAgainstAI(false)}>👫 Play With Friend</button>
          </div>
        ) : (
          <>
            <p className="status-message">{status}</p>
            <div className="board">
              {board.map((square, index) => (
                <button key={index} className={`square ${square}`} onClick={() => handleClick(index)}>
                  {square}
                </button>
              ))}
            </div>
            <button className="reset-btn" onClick={resetGame}>🔄 Restart</button>
            <button className="close-btn" onClick={onClose}>❌ Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
