export const stage_width = 12; // used to calc cell width
const stage_height = 20;

export const createStage = () =>
  Array.from(Array(stage_height), () =>
    new Array(stage_width).fill([0, "clear"])
  );
