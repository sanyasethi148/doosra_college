var playerturn = true ;
const checker = () => 
{
    if(playerturn)
    {
      playerturn =!playerturn;
      return "x";
    }
    else
    {
      playerturn =!playerturn;
      return "0";
    }
}
var boxes = document.getElementsByClassName("cont");
var message = document.querySelector(".message");
var winner=false;
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", () =>{
        boxes[i].innerHTML = checker();
        if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML ) 
        {
            message.innerHTML = `${boxes[0].innerHTML} - Player is win`;
            boxes[0].style.backgroundColor = "pink";
            boxes[1].style.backgroundColor = "pink";
            boxes[2].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[3].innerHTML && boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML)
        {
            message.innerHTML = `${boxes[3].innerHTML} - Player is win`;
            boxes[3].style.backgroundColor = "pink";
            boxes[4].style.backgroundColor = "pink";
            boxes[5].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[6].innerHTML && boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML)
        {
            message.innerHTML = `${boxes[6].innerHTML} Player is win`;
            boxes[6].style.backgroundColor = "pink";
            boxes[7].style.backgroundColor = "pink";
            boxes[8].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML)
        {
            message.innerHTML = `${boxes[0].innerHTML} Player is win`;
            boxes[0].style.backgroundColor = "pink";
            boxes[3].style.backgroundColor = "pink";
            boxes[6].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[1].innerHTML && boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML)
        {
            message.innerHTML = `${boxes[1].innerHTML} Player is win`;
            boxes[1].style.backgroundColor = "pink";
            boxes[4].style.backgroundColor = "pink";
            boxes[7].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[2].innerHTML && boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML)
        {
            message.innerHTML = `${boxes[2].innerHTML} Player is win`;
            boxes[2].style.backgroundColor = "pink";
            boxes[5].style.backgroundColor = "pink";
            boxes[8].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[0].innerHTML && boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML)
        {
            message.innerHTML = `${boxes[0].innerHTML} Player is win`;
            boxes[0].style.backgroundColor = "pink";
            boxes[4].style.backgroundColor = "pink";
            boxes[8].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
        else if(boxes[2].innerHTML && boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[6].innerHTML)
        {
            message.innerHTML = `${boxes[2].innerHTML} Player is win`;
            boxes[2].style.backgroundColor = "pink";
            boxes[4].style.backgroundColor = "pink";
            boxes[6].style.backgroundColor = "pink";
            winner = true;
            setTimeout(clear,400);
        }
    });
}


const clear =  () =>
{
    if(winner === true)
    {
        alert(`press RESET to play again`);
    }
}


// reset.addEventListener('click',()=>{
//   let message = document.querySelectorAll(".message");  
//   Array.from(message).forEach(element=>{
//     element.innerText =''
//   });
// })