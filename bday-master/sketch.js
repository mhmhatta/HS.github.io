/*
 * b'day card
 * created: 21 December 2018
 * d-day: 24 December 🎉
 * 
 * https://hilmizul.github.io/bday
 */

var mobils = [];
var balloons = [];
var total = 12;
var font;
var foto, bgStatic;
var txt = "HAPPY BIRTHDAY!!!";
var txtp = "Alhamdulillah, kamu telah di bumi selama :";
var txtp1 = "19 years or 228 months or 991 weeks 3 days or 6,940 days or 166,560 hours or 9,993,600 minutes or 599,616,000 seconds.";
var name = "SWEETY PIEEE!!";
var sfxPop;

function preload() {
	foto = loadImage("assets/img/rv.png");
	bgStatic = loadImage("assets/img/jakarta.png");
	font = loadFont("assets/font/FredokaOne.ttf");
	sfxPop = loadSound("assets/sfx/pop.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balloons.push(new Ballon());
	}
}

function draw() {
	background(114, 51, 153);
	
	image(bgStatic, 0, 0, width, height);

	push();
	var imgX = width / 2;
	var imgY = height / 2;
	// foto
	translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
	imageMode(CENTER);
	image(foto, 0, 0, 200, 200);
	// frame
	noFill();
	stroke(250, 150);
	strokeWeight(10);
	ellipse(0, 0, 210, 210);
	pop();

	// name
	push();
	fill(255);
	stroke(45, 28, 82);
	strokeWeight(7);
	textFont(font);
	textSize(50);
	textAlign(CENTER);
	// name
	text(name, imgX + (mouseX - width / 2) / 30, imgY + 200 + (mouseY - height / 2) / 30);
	// teks hbd
	text(txt, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
    	text(txtp, imgX + (mouseX - width / 2) / 30, imgY + 270 + (mouseY - height / 2) / 30);
   	text(txtp1, imgX + (mouseX - width / 2) / 30, imgY + 320 + (mouseY - height / 2) / 30);
	pop();

	// balloons
	for (let i = 0; i < balloons.length; i++) {
		balloons[i].show();
		balloons[i].up();
		balloons[i].checkEdge()
		if (balloons[i].mouseHover()) {
			sfxPop.play();
			balloons.splice(i, 1);
		}
	}

	if (balloons.length < 3) {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}

function keyPressed() {
	if (key === 'z' || key === 'Z') {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}
