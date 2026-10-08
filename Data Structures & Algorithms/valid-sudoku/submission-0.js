class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let columns = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let element = board[i][j];

            // Bỏ qua các ô trống
            if (element === '.') continue;

            // Tính chỉ số ô 3x3
            let boxRow = Math.floor(i / 3);
            let boxCol = Math.floor(j / 3);

            // Kiểm tra trùng lặp
            if (rows[i].has(element)) return false;
            if (columns[j].has(element)) return false;
            if (boxes[boxRow][boxCol].has(element)) return false;

            // Thêm giá trị vào Set
            rows[i].add(element);
            columns[j].add(element);
            boxes[boxRow][boxCol].add(element);
        }
    }
    return true;
}
}
