## Project Title

GBDA302 Week 4 Example 5: Blob Platformer (JSON + Classes)

---

## Authors

- Base platformer structure adapted from GBDA302 Week 2 example by Dr. Karen Cochrane and David Han.
- Level generation implementation and extension by Giang Tran.

---

## Description

This project extends the Week 2 blob platformer by implementing a tile-based level generator using 2D arrays and nested loops. The game features two levels: a hand-crafted JSON level and a dynamically generated level created from a tile map. Players automatically progress between levels by reaching gold goal zones.
Key features:

- Tile-based level generation using 2D arrays (4 tile types: empty, platform, obstacle, floating platform)
- Nested loops to dynamically place platforms and obstacles from grid data
  A- utomatic level progression with goal zone collision detection
- Visual distinction between platforms (green/gray) and obstacles (red)
- Smooth level looping

---

## Learning Goals

Learning Goals:

- Use 2D arrays to represent level layouts as tile maps
- Implement nested loops to convert grid data into game objects
- Dynamically place platforms and obstacles based on array values
- Integrate generated levels with existing JSON-based level system
- Implement goal zone collision detection for level progression
- Maintain clean code architecture by reusing existing Platform class

---

## Assets

N/A

---

## GenAI

The code was written by Dr. Karen Cochrane and David Han but they used GenAI to write the comments.

GenAI (Claude Code by Anthropic) was used as a technical implementation assistant for:

Structuring the levelGenerator.js file and array-to-object conversion logic
Suggesting collision detection approaches for goal zones
Providing syntax guidance for array manipulation and nested loops

---
