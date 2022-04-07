import {randomRGB, randomRGBWithinRange, makeRectWithRotation} from '../../packages/art-gen-utils';

export const draw = (ctx: CanvasRenderingContext2D) => {
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  const {red, green, blue} = randomRGB(true);// as {red: number, blue: number, green: number};
  const numberOfBoxes = 1000;
  ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
  ctx.fillRect(0, 0, winW, winH)

  for(let i = 0; i < numberOfBoxes; i++) {
    const sqSize = Math.round(Math.random() * 100)
    makeRectWithRotation(ctx, {
      x: Math.round(Math.random() * winW), 
      y: Math.round(Math.random() * winH),
      width: sqSize,
      height: sqSize,
      rotation: Math.round(Math.random() * 360),
      color: randomRGBWithinRange(red, green, blue, 25)
    })
  }
}