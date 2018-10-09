import { Sudoku } from './../src/sudoku.js';


describe('Sudoku', function() {

  it('should return error', function() {
    var row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var sudoku = new Sudoku(row1);
    expect(sudoku.isRightRow()).toEqual(45);
  });
  





});
