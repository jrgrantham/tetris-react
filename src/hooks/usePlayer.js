import { useState, useCallback } from "react";

import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, direction) => {
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (direction > 0) return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();

    // mutates state
    // for (let y = 0; y < matrix.length; y++) {
    //   for (let x = 0; x < y; x++) {
    //     [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    //   }
    // }
    // if (direction > 0) {
    //   matrix.forEach((row) => row.reverse());
    // } else {
    //   matrix.reverse();
    // }
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
