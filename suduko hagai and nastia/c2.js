{
  
  //build an empty cells board
  div = document.getElementsByTagName('div')[0];
  div.style.marginTop = "5%";
  
  tab = document.createElement('table');
  tab.style.marginLeft = "25%";
  
  for (row = 0; row < 9; row++){
    tr = document.createElement('tr');
    for (col = 0; col < 9; col++){
      td = document.createElement('input');
  
      td.style.width = "1.5cm";
      td.style.height = "1.5cm";
      td.style.textAlign = "center";
      td.style.fontSize = "14pt"
      td.style.fontWeight = "bolder"
      td.id="cell"+row+col;
      td.style.backgroundColor = "orange";
      
  
      tr.appendChild(td);
    }
    tab.appendChild(tr);
  }
  div.appendChild(tab);
  
  
  
  
  
  
  //
  function sudokuSolver(puzzle) {
    var nonPossibilities = {},impossibleNumbers, emptySpaces = 81;
    while (emptySpaces > 0) {
      emptySpaces = 0;
      for (var vert = 0; vert < puzzle.length; vert++) {
        for (var horz = 0; horz < puzzle.length; horz++) {
          if (puzzle[vert][horz] === 0) {
            nonPossibilities = {};
            for (var i = 0; i < 9; i++) {
              if (puzzle[vert][i] > 0) {
                nonPossibilities[puzzle[vert][i]] = true;
              }
              if (puzzle[i][horz] > 0) {
                nonPossibilities[puzzle[i][horz]] = true;
              }
            }
            for (var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++) {
              for (var horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++) {
                if (puzzle[vertBox][horzBox]) {
                  nonPossibilities[puzzle[vertBox][horzBox]] = true;
                }
              }					
            }
            impossibleNumbers = Object.keys(nonPossibilities);
            if (impossibleNumbers.length === 8) {
              for (var i = 1; i < 10; i++) {
                if (impossibleNumbers.indexOf(i.toString()) < 0) {
                  console.log(vert,horz);
                  puzzle[vert][horz] = i;
                }
              }
            } else {
              emptySpaces++;
            }
          }
        }
      }
    }
    return puzzle;
  }
  
  
  var puzzle = [
              [5,3,0,0,7,0,0,0,0],
              [6,0,0,1,9,5,0,0,0],
              [0,9,8,0,0,0,0,6,0],
              [8,0,0,0,6,0,0,0,3],
              [4,0,0,8,0,3,0,0,1],
              [7,0,0,0,2,0,0,0,6],
              [0,6,0,0,0,0,2,8,0],
              [0,0,0,4,1,9,0,0,5],
              [0,0,0,0,8,0,0,7,9]];
  
              var naked;
              //sending the unsolved puzzle
              function tableFill(){
                for (row = 0; row < 9; row++){
                  for (col = 0; col < 9; col++){
                   document.getElementById("cell"+row+col).value = puzzle[row][col];
                  if(puzzle[row][col] === 0){
                    naked = document.getElementById("cell"+row+col).value = (""); 
                  }  
                  }
              }}
              tableFill();
  
  console.log(sudokuSolver(puzzle));
  
  
   //checking the inputs and compares between two arrays 
  function check(){
    var userSolution=[];
    var row, col = 0;
    
    for ( var row = 0; row < 9; row++ ) {
      for(var col=0; col<9 ;col++){
        userSolution.push(document.getElementById("cell"+row+col).value);
      }}
        var newArr = [];
        while(userSolution.length) newArr.push(userSolution.splice(0,9));
        console.log(newArr);
     
        var result = true;
            
            for ( var i = 0; i < newArr.length; i++ ) {
              for(var j=0; j<9 ;j++){ 
                if ( newArr[ i ][j] != puzzle[ i ][j] ) {
                    
                    result = false;
                    break;
                }
            }
          }
        console.log(result);
        return result;
    }
     
    
      
  
  
  
  
  
  //  var matrix = [],
  //  cols = 9;
  //  function boarder(){
  
  //  var newrr = new Array();
  // // //creating random board cells
  //  for ( var i = 0; i < cols; i++ ) {
  //  matrix[i] = [];
  //  for(var j=0;j<cols;j++)
  //  matrix[i][j] = Math.floor(Math.random()*cols+1);
  //  //console.log(matrix); 
  //  //newrr = matrix.slice(i,9);
  //  //console.log(newrr); 
  //  } return matrix;
  //  }
  //  console.log(boarder().slice());
  
  
  
  }
  
    
  
  