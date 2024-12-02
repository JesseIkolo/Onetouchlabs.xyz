let arroundContent = document.querySelector(".arround-content"),
    canvas = document.querySelector(".arounded"),
    dim = {
        // width : arroundContent.offsetWidth,
        // height : arroundContent.offsetHeight,
        width : 32,
        height : 32
    },
    round = [],
    roundNumber = 12;


for(i=1; i<roundNumber; i++){
    let el = document.createElement("div");
    el.id = i;


    // Set style
    el.style.width  =  dim.width + i*96 + "px";
    el.style.height  = dim.height + i*96 + "px";
    el.style.borderRadius  = i*100 + "px";
    // el.style.borderRadius  = i*32 + "px";
    el.style.zIndex = roundNumber - i;
    
    el.classList.add("round");
    arroundContent.appendChild(el);


    //Set position
    el = document.getElementById(i);
    el.style.left = window.innerWidth/2  - el.offsetWidth/2 + "px"
    el.style.top = window.innerHeight/2  - el.offsetHeight/2 + "px"
 

    console.log(window.innerWidth/2 )
}

console.log(round,dim);

let roundedLines = document.querySelectorAll(".round");

for(i=0;i< roundedLines.length; i++){

    // console.log(el)

    anime.timeline({loop: true})
    .add({
        targets: roundedLines[i],
        scale: [1, 1.1],
        opacity: [0.1,.3],
        easing: "easeOutExpo",
        // borderColor : "rgba(140, 204, 0)",
        duration: 200,
        delay : i*50 + 80,
      })
      .add({
        targets: roundedLines[i],
        scale: [1, .9],
        opacity: [.2,.1],
        easing: "easeOutExpo",
        // borderColor : "rgba(140, 204, 0)",
        duration: 300,
        delay : i*1.5 + 10,
      })
      .add({
        targets: roundedLines[i],
        scale: [1, 1.1],
        opacity: [0.1,.3],
        easing: "easeOutExpo",
        // borderColor : "rgba(140, 204, 0)",
        duration: 200,
        delay : i*2,
      })
      .add({
        targets: roundedLines[i],
        scale: [1, .9],
        opacity: [.2,0.1],
        easing: "easeOutExpo",
        // borderColor : "rgba(140, 204, 0)",
        duration: 300,
        delay : i*5 + 5,
      })
      .add({
        duration: 5000 
      })
}



// .add({
//     targets: '.round',
//   //   translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   })