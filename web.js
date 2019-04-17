const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Mutable State
let state = initialState();

// Position Helpers
const x = c => Math.round((c * canvas.width) / state.cols);
const y = r => Math.round((r * canvas.width) / state.cols);

// Game loop draw
const draw = () => {
  ctx.fillStyle = "#232323";
};
