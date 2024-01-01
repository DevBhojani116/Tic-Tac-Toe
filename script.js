let clickSound = new Audio('click.wav');
let winningSound = new Audio("winner.mp3");

let arr = [false,false,false,false,false,false,false,false,false]; //array holding the value of each cell
let count = 0; //for deciding turns
let title = document.getElementById("title");
title.innerHTML = "Start the game";
resetGame();
function clicked()
{
    let clickedElement = event.target.id;

    //checking if the clicked cell is available for use or not
    if(isOccupied(clickedElement) == true)
    {
        document.getElementById(clickedElement) = "disabled";
        // update.innerHTML = "Cell already used by another player! Try again";
        exit();
    }

    clickSound.play();

    //determining whether the input is X or O
    let v = "";
    if(count%2 == 0)
    { 
        document.getElementById(clickedElement).style.color = "#b0413e";
        v = "X";
    }
    else
    {
        document.getElementById(clickedElement).style.color = "black";
        v = "O";
    }

    //updating the value in the array and also printing the update on the screen
    arr[parseInt(clickedElement)-1] = v;
    title.innerHTML = v + " at " + clickedElement;
    // console.log(clickedElement);

    //updating the value on the screen
    document.getElementById(clickedElement).innerHTML = v;

    //checking if someone has won or if the game is drawn
    let winner = win(arr)
    if(winner == "X" || winner == "O" || count == 8)
    {
        title.innerHTML = "Match Over!!";
        if(winner == "X" || winner == "O")
        {
            winningSound.play();
            //disabling every other cell
            arr.forEach((element,index,arr)=>
            {
                arr[index] = true;
            });
            document.getElementById("winner").innerHTML = "Winner is " + winner;
        }
        else
            document.getElementById("winner").innerHTML = "It's a draw";
    }
    else
        count++;
}

function isOccupied(cell)
{
    if(arr[cell-1] == false)
        return false; //the cell is empty
    else
        return true; //the cell contains either X or O
}

let winningPossibilities = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
function win(arr)
{
    for(let i = 0; i<8; i++)
    {
        let check = 0;
        if(arr[winningPossibilities[i][0]] != false)
        {
            if(arr[winningPossibilities[i][0]] == arr[winningPossibilities[i][1]] && arr[winningPossibilities[i][1]] == arr[winningPossibilities[i][2]] && arr[winningPossibilities[i][0]] == arr[winningPossibilities[i][2]])
            {
                check = 1;
            }
            if(check === 1)
            {
                lines = document.getElementsByClassName("lines");
                if(i == 2) //slantLineLR needs to be displayed
                {
                    lines[0].style.display = "inline";
                }
                else if(i == 5) //slantLineRL needs to be displayed
                {
                    lines[1].style.display = "inline";
                }
                else if(i == 6) //horizontalLine needs to be displayed in the centre column
                {
                    lines[2].style.display = "inline";
                    lines[2].style.position = "relative";
                    lines[2].style.top = "134px";
                }
                else if(i == 0) //horizontalLine needs to be displayed in the first column(topmost column)
                {
                    lines[2].style.display = "inline";
                    lines[2].style.position = "relative";
                    lines[2].style.top = "45px";
                }
                else if(i == 7) //horizontalLine needs to be displayed in the last column(bottommost column)
                {
                    lines[2].style.display = "inline";
                    lines[2].style.position = "relative";
                    lines[2].style.top = "223px";
                }
                else if(i == 3) //verticalLine needs to be displayed in the centre row
                {
                    lines[3].style.display = "inline";
                    lines[3].style.position = "relative";
                    lines[3].style.top = "135px";
                    lines[3].style.left = "0px";
                }
                else if(i == 1) //verticalLine needs to be displayed in the first row(leftmost row)
                {
                    lines[3].style.display = "inline";
                    lines[3].style.position = "relative";
                    lines[3].style.top = "135px";
                    lines[3].style.left = "-88px"
                }
                else if(i == 4) //verticalLine needs to be displayed in the last row(rightmost row)
                {
                    lines[3].style.display = "inline";
                    lines[3].style.position = "relative";
                    lines[3].style.top = "135px";
                    lines[3].style.left = "88px"
                }
                return arr[winningPossibilities[i][0]];
            }
        }
    }
    return "none";
}

function resetGame()
{
    arr = [false,false,false,false,false,false,false,false,false];
    for(let i = 1; i<=9; i++)
    {
        document.getElementById(i).innerHTML = "";
    } 
    for(let i = 0; i<=3; i++)
    {
        document.getElementsByClassName("lines")[i].style.display = "none";
    }
    title.innerHTML = "Start the game";
    document.getElementById("winner").innerHTML = "";
    count = 0;
}