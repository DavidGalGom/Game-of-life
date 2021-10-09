const { walkOverTheBoard } = require("../build/gameOfLife");

describe("function walkOverTheBoard go over the board, and call other functions to solve the value of each cell", () => {
  describe("function upperLeftCorner evaluate the [0][0] position of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],] is introduced, expected a [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });

  describe("function upperRightCorner evaluate the [0][board.length - 1] position of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,1,0],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],] is introduced, expected a [[0,0,0,1,1],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });

  describe("function lowerRightCorner evaluate the [board.length - 1][board.length - 1] position of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });
  describe("function lowerLeftCorner evaluate the [board.length - 1][0] position of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,0,0,0],[0,1,0,0,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,0,0,0],[1,1,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });
  describe("function bottomBorder evaluate cells at bottom of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });
  describe("function topBorder evaluate cells at top of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],] is introduced, expected a [[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });

  describe("function leftBorder evaluate cells at left of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });

  describe("function rightBorder evaluate cells at right of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,1,1],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });

  describe("function centerBoard evaluate cells at center of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],] is introduced, expected a [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
      const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const result = walkOverTheBoard(board);

      expect(result).toEqual(expected);
    });
  });
});
