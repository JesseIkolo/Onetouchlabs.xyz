if(document.querySelector(".squares")){
    let squaresScene = document.querySelector(".squares"),
    square_countX = Math.trunc(squaresScene.offsetWidth / 96) + 1;
    square_countY = Math.trunc(squaresScene.offsetHeight / 96) + 1;

console.log(squaresScene.offsetWidth, square_countX, square_countY);

// Redimensionnement de la scene pour avoir les carrés occupant l'espace disponible
squaresScene.style.width = square_countX*96 + "px";
squaresScene.style.height = square_countY*96 + "px";

console.log(squaresScene.offsetWidth, square_countX, square_countY);

// tester si les nombre sont paire

// if (!numIsPair(square_countX) ){square_countX +=1, console.log(square_countX)}
// if (!numIsPair(square_countY) ){square_countY +=1, console.log(square_countY)}

for (a = 0; a < square_countY; a++) {

    for (i = 0; i < square_countX; i++) {
        let el = document.createElement("div");

        el.classList.add("square");
        el.style.width = "96px";
        el.style.height = "96px";

        squaresScene.appendChild(el);
    }
}


function numIsPair(n) {
    return (n & 1) ? false : true;
  }

}