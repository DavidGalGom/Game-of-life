const { walkOverTheBoard } = require("../build/gameOfLife");

describe("function walkOverTheBoard go over the board, and call other functions to solve the value of each cell", () => {
  describe("function upperLeftCorner evaluate the [0][0] position of the board, and return 0 or 1 depending on the neighbours alive cells", () => {
    test("If a [[0,1,0,0,0],[1,1,0,0,0][0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],] is introduced, expected a [[1,1,0,0,0],[1,1,0,0,0][0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],]", () => {
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
});
