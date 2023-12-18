// document.getElementById("c1").disabled = false;
// document.getElementById("c2").disabled = false;
// document.getElementById("c3").disabled = false;
// document.getElementById("c5").disabled = false;
// document.getElementById("c4").disabled = false;
// document.getElementById("c6").disabled = false;
// document.getElementById("c7").disabled = false;
// dcument.getElementById("c8").disabled = false;
// document.getElementById("c9").disabled = false;

const arr = [false,false,false,false,false,false,false,false,false];

let count = 0;
function clicked()
{
    let v = "abcd"
    if(count%2 == 0)
        v = "X";
    else
        v = "O";
    count++;
    let clickedElement = event.target.id;
    if(arr[parseInt(clickedElement)-1] == true)
        console.log("Cell already used by another player! Try again");
    arr[parseInt(clickedElement)-1] = true;
    console.log(clickedElement)
    document.getElementById(clickedElement).value = v;
    console.log(arr);
}


