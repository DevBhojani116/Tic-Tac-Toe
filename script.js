const arr = [false,false,false,false,false,false,false,false,false];

let count = 0;
function clicked()
{
    let clickedElement = event.target.id;

    if(isOccupied(clickedElement) == true)
    {
        console.log("Cell already used by another player! Try again");
        exit();
    }

    let v = "";
    if(count%2 == 0)
        v = "X";
    else
        v = "O";

    arr[parseInt(clickedElement)-1] = true;
    console.log(clickedElement);
    
    document.getElementById(clickedElement).innerHTML = v;
    count++;
    console.log(arr);
}

function isOccupied(cell)
{
    if(arr[cell-1] == false)
        return false; //the cell is empty
    else
        return true; //the cell contains either X or O
}


