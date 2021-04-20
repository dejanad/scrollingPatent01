var patent;

// empty array of posters 
let Posters = [];


let h1;
let canvas;
let scrollDelta = 0; 
let buttonImage;

function preload(){
  // me = loadImage('me.png');
  // bernie = loadImage('bernie.png');
  patent = loadStrings("US10061977-2.txt");

  // for (let i=0; i<4;i++){
  //   Posters[i] = loadImage("pic"+i+".png");
  // }
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  //loads patent text
  // createP(join(patent, "<br/>"));
  createP(patent);
}


// function scroll1(){
//   for (let i=0; i<Posters.length;i++){
//   buttonImage = createImg(random(Posters[i]));
//   buttonImage.position(mouseX,mouseY);
//   buttonImage.size(800,600);
//   }
 
// }

// function openPic(){
//   window.open('google.com');
// }


// function scroll2(){
//   buttonImage = createImg('pic0.png');
//   buttonImage.size(800,600);
//   buttonImage.position(mouseX,mouseY);
// }




// function mouseWheel(event) { 
//   scrollDelta = event.delta; 
 
//   clear(); 
//   deltaString = "Current mouse delta is: "
//                   + scrollDelta; 
  
//                   buttonImage.size(200,350);
//                   buttonImage.position(displayWidth/2,0)
 
//   if (scrollDelta > 0) { 
//       buttonImage
//   }  
//   else { 
//       text("You are scrolling upwards", 10, 40); 
//   } 
// } 








// brightness_4
// let scrollDelta = 0; 
   

   
// patent.mouseWheel = function(event) {
//   if (scrollDelta <= canvasHeight || event.delta < 0) scrollDelta += event.delta;
//   if (scrollDelta < 0) scrollDelta = 0;
// }


// function mouseWheel(event){

//   // let randompic = random(pics);
//   print(event.delta);
//   scrollDelta += event.delta;


//   if (scrollDelta>15)

//   for (let i=0; i <Posters.length; i++){
//     Posters[i].show();
//   }

  

//   // noLoop();
 

//   // else if (scrollDelta>30);
//   // scroll2();

// }

// function mouseWheel(event){

//   // let randompic = random(pics);
//   print(event.delta);
//   scrollDelta += event.delta;


//   if (scrollDelta>15)
//   for (let i=0; i<4;i++){
    
//     // buttonImage = createImg("pic"+i+".png");
//     buttonImage = createImg(random(Posters[i]));
//     buttonImage.position(mouseX,mouseY);
//     buttonImage.size(500,800);
//     }
//   // scroll2;

    
//   }

  

  // noLoop();
 

  // else if (scrollDelta>30);
  // scroll2();


