// Je recupere toutes les ligne


let slideBlock = document.querySelectorAll(".slide-show li.current h1"),
    lopper = 0, 
    duration;

slideBlock.forEach(element => {
    textWrapper = element.querySelectorAll('.ml11 .letters');
    console.log(textWrapper);
    element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

})


// textWrapper.forEach((e)=>{
//     console.log(e);

//     anime.timeline({loop: false})
//     .add({
//       targets: '.ml11 .line',
//       scaleY: [0,1],
//       opacity: [0.5,1],
//       easing: "easeOutExpo",
//       duration: 700
//     })
//     .add({
//       targets: '.ml11 .line',
//       translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//       easing: "easeOutExpo",
//       duration: 700,
//       delay: 100
//     }).add({
//       targets: '.ml11 .letter',
//       opacity: [0,1],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: '-=775',
//       delay: (el, i) => 34 * (i+1)
//     }).add({
//         targets: '.ml11',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000,
//         complete : function(e){
//           console.log('lol')
//         }
//       });
// })

// });

 




