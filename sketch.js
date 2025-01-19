let img = [];
let img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17;

let limiter = 0;
function preload () {
  img2 = loadImage('Images/image2.jpg');
  img3 = loadImage('Images/image3.jpg');
  img4 = loadImage('Images/image4.jpg');
  img5 = loadImage('Images/image5.jpg');
  img6 = loadImage('Images/image6.jpg');
  img7 = loadImage('Images/image7.jpg');
  img8 = loadImage('Images/image8.jpg');
  img9 = loadImage('Images/image9.jpg');
  img10 = loadImage('Images/image10.jpg');
  img11= loadImage('Images/image11.jpg');
  img12 = loadImage('Images/image12.jpg');
  img13 = loadImage('Images/image13.jpg');
  img14 = loadImage('Images/image14.jpg');
  img15 = loadImage('Images/image15.jpg');
  img16 = loadImage('Images/image16.jpg');
  img17 = loadImage('Images/image17.jpg');
}

function setup() {
  createCanvas(500, 500);
  img.push( img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17);
  frameRate(2);

}

function draw() {
 background(10);
let r = random(img)

   image (r, 0, 0, width, height);  
    // blendMode(BURN) (turn this into an if statemtn)
    rotate(random(0, 5))

    let falseswitch = random(1);
    if (falseswitch < 0.25) {
      blendMode(ADD);        // First 25% range
    } else if (falseswitch < 0.5) {
      blendMode(SCREEN);     // Next 25% range
    } else if (falseswitch < 0.75) {
      blendMode(SOFT_LIGHT);   // Next 25% range
    } else {
      blendMode(SUBTRACT); // Last 25% range
    }
      
 image (r, 0, 0, width, height);
  tint(random(1, 255), random(1, 255), random(1, 255))

  limiter++;
  if (limiter ===4) {
    noLoop();
  }
 }

