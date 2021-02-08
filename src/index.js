
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if(matrix===[]||typeof(matrix)==="undefined"){
    return arr;
  }
  return matrix.map((value, index) => index % 2 === 0 ? value : value.reverse()).flat(); 
}
