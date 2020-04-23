import React, { useState } from "react";
import styled from "styled-components";
import { Swipeable } from "react-swipeable";

import { createStage, checkCollision } from "../gameHelpers";

// Custom Hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  const swipeDrop = () => {
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  const swipe = (swipeDir) => {
    if (!gameOver) {
      if (swipeDir === "Left") {
        movePlayer(-1);
      } else if (swipeDir === "Right") {
        movePlayer(1);
      } else if (swipeDir === "Down") {
        swipeDrop();
      } else if (swipeDir === "Up") {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <div className="scores">
          <Display text={`Score: ${score}`} />
          {/* <Display text={`Rows: ${rows}`} /> */}
          <Display text={`Level: ${level}`} />
        </div>
        <Swipeable
          onSwiped={(e) => {
            swipe(e.dir);
            console.log(e.dir);
          }}
        >
          <Stage stage={stage} />
        </Swipeable>
        {/* <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div></div>
          )}
        </aside> */}
        {!dropTime ? (
          <StartButton callback={startGame} />
        ) : (
          <div className="scores">
            <p onClick={() => movePlayer(-1)} >Left</p>
            <p onClick={() => playerRotate(stage, 1)} >Rotate</p>
            <p onClick={() => swipeDrop()} >Drop</p>
            <p onClick={() => movePlayer(1)} >Right</p>
          </div>
        )}
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #303030;
  /* border: 4px solid red; */
`;

export const StyledTetris = styled.div`
  box-sizing: border-box;
  /* border: 40px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: black;
  /* padding: 0 40px; */
  margin: 0 20px;
  max-width: 400px;

  p {
    margin: 0;
    width: calc(25% - 5px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 4px solid #333;
    border-radius: 5px;
    color: ${(props) => (props.gameOver ? "red" : "#999")};
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }

  .scores {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
  }
`;
