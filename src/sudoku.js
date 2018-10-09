export function Sudoku(row1, row2) {
this.row1 = row1;
this.row2 = row2;
// this.row2 = row2;
// this.row3 = row3;

}

// var row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//


Sudoku.prototype.isRightRow = function() {
  var sum=0;
  for(var i = 0; i<9; i++) {
     sum += this.row1[i]; }
  return sum;
};

Sudoku.prototype.isRightColumn = function() {
  for(var i = 0; i<9; i++) {
    if ((this.row1[i] + this.row2[i]) != 45 }
  return sum;
};


// Sudoku.prototype IsRightColumn(){
//   var allRows = (row1, row2, row3, row4, fow5, row6, row7, row8, row9);
// }
