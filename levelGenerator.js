/*
Level Generator - Uses arrays and loops to dynamically place tiles/platforms

The level is defined as a 2D array (tile map) where:
  0 = empty (air)
  1 = ground/platform
  2 = obstacle (spikes)
  3 = floating platform

Each cell in the array represents a TILE_SIZE x TILE_SIZE area.
*/

const TILE_SIZE = 40;

// Define level layout as a 2D array
const levelMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
  [0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
];

// Generate platforms from the tile map using loops
function generateLevelFromMap(tileMap) {
  const platforms = [];
  const obstacles = [];

  // Loop through each row
  for (let row = 0; row < tileMap.length; row++) {
    // Loop through each column
    for (let col = 0; col < tileMap[row].length; col++) {
      const tile = tileMap[row][col];

      // Calculate position based on grid
      const x = col * TILE_SIZE;
      const y = row * TILE_SIZE;

      // Place different elements based on tile value
      if (tile === 1) {
        // Ground platform
        platforms.push({ x: x, y: y, w: TILE_SIZE, h: TILE_SIZE, type: "ground" });
      } else if (tile === 2) {
        // Obstacle (spike)
        obstacles.push({ x: x, y: y, w: TILE_SIZE, h: TILE_SIZE, type: "spike" });
      } else if (tile === 3) {
        // Floating platform
        platforms.push({ x: x, y: y, w: TILE_SIZE, h: TILE_SIZE / 3, type: "float" });
      }
    }
  }

  return { platforms, obstacles };
}

// Build level JSON from the tile map
function buildGeneratedLevel() {
  const generated = generateLevelFromMap(levelMap);

  return {
    name: "Level 2 - Generated",
    gravity: 0.65,
    jumpV: -12.0,
    theme: { bg: "#2C3E50", platform: "#27AE60", blob: "#E74C3C" },
    start: { x: 60, y: 240, r: 26 },
    goal: { x: 560, y: 80, w: 50, h: 50 },
    platforms: generated.platforms,
    obstacles: generated.obstacles,
  };
}
