let arr = [false,false,false,false,false,false,false,false,false];
let count = 0;
let update = document.getElementById("title");
update.innerHTML = "Start the game";
let println = document.getElementById("print");
function clicked()
{
    let clickedElement = event.target.id;

    //checking if the clicked cell is available for use or not
    if(isOccupied(clickedElement) == true)
    {
        update.innerHTML = "Cell already used by another player! Try again";
        exit();
    }

    //determining whether the input is X or O
    let v = "";
    if(count%2 == 0)
        v = "X";
    else
        v = "O";

    //updating the value in the array and also printing the update on the screen
    arr[parseInt(clickedElement)-1] = v;
    update.innerHTML = v + " at " + clickedElement;
    // console.log(clickedElement);

    //updating the value on the screen
    document.getElementById(clickedElement).innerHTML = v;

    //checking if someone has won
    let winner = win(arr)
    document.getElementById("winner").innerHTML = "Winner is " + winner;
    if(winner == "X" || winner == "O" || count == 8)
    {
        update.innerHTML = "Match Over!!";
        resetGame();
    }
    println.innerHTML = arr;
    count++;
}

function isOccupied(cell)
{
    if(arr[cell-1] == false)
        return false; //the cell is empty
    else
        return true; //the cell contains either X or O
}

let winningPossibilities = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
function win(arr)
{
    for(let i = 0; i<8; i++)
    {
        if(arr[winningPossibilities[i][0]] != false)
            if(arr[winningPossibilities[i][0]] == arr[winningPossibilities[i][1]] && arr[winningPossibilities[i][1]] == arr[winningPossibilities[i][2]] && arr[winningPossibilities[i][0]] == arr[winningPossibilities[i][2]])
                return arr[winningPossibilities[i][0]];
    }
    return "none";
}

function resetGame()
{
    arr = [false,false,false,false,false,false,false,false,false];
    println.innerHTML = arr;
    for(let i = 1; i<=9; i++)
    {
        document.getElementById(i).innerHTML = "";
    } 
}