import * as PIXI from "pixi.js";

// Create the Pixi Application
const app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x1e1e1e,
});

document.body.appendChild(app.view as HTMLCanvasElement);

// Create a rectangle (our test object)
const box = new PIXI.Graphics();

box.beginFill(0xff0000);
box.drawRect(0, 0, 100, 100);
box.endFill();

box.x = 100;
box.y = 250;

app.stage.addChild(box);

// Game loop
app.ticker.add(() => {
  box.x += 1;

  if (box.x > 800) {
    box.x = -100;
  }
});