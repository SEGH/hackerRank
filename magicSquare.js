// A magic square is an n x n matrix of distinct, positive integers from 1 to n squared where the sum of any row, column, or diagonal is always equal to the same number

// Convert matrix s to a magic square at minimal cost
// Cost is |a - b| when converting a to b

// Given constraints n = 3
    // The sum of numbers 1 -9 is 45; 45 / 3 rows = 15
    // 15 must be the magic number

// Referenced discussion thread: https://www.hackerrank.com/challenges/magic-square-forming/forum/comments/347589
// There are eight combinations of three numbers 1 -9 that add up to 15:
const validCombinations = [[9, 5, 1], [7, 5, 3], [2, 5, 8], [4, 5, 6], [2, 9, 4], [6, 1, 8], [6, 7, 2], [8, 3, 4]];
// 5 appears in four of them, so must be in the center of the matrix
// Each corner spot must be a number that appears three times: 2, 4, 6, 8
// Inserting the remaining numbers in the middle slots, you can get one magic square possibility:
const magicSquareOne = [[2, 9, 4], [7, 5, 3], [6, 1, 8]];

// The rest of the possibilities can be found by mirror images and rotations, and leaves us with:
const allPossibleMagics = [
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
]

function formingMagicSquares(s) {

}