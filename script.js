const cards = document.querySelectorAll(".card");
const refreshButton = document.querySelector(".reset");
const msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

let turnO = true; 
let count = 0; 
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (turnO) {
      card.innerHTML = `<P> O </P>`;
      card.style = `background-color:aqua;`
      turnO = false;
    } else {
      card.innerHTML = `<P> X </P>`;
      card.style = `background-color:purple;`
      turnO = true;
    }
    card.disabled = true;
    checkWinner()
    count++;
  });
});
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const showWinner = (winner) => {
  msg.innerText = `Congratulations, The Winner is ${winner}`;
  msgContainer.classList.remove("hide");
}
const disableCards = () => {
  for(card of cards){
    card.disabled = true ;
  }
}
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = cards[pattern[0]].innerText;
    let pos2Val = cards[pattern[1]].innerText;
    let pos3Val = cards[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableCards(); 
        return true;
      }
    }
  }
};
refreshButton.addEventListener("click", function() {
  window.location.reload();
});
