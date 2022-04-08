import {randomRGBWithinRange, makeCircle} from '../../packages/art-gen-utils';

const GreenBase = {
    red:28, 
    green: 54, 
    blue: 35
};

export const draw = (ctx: CanvasRenderingContext2D) => {
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const numberOfStars = 250;

  const baseGreenVariant = randomRGBWithinRange(
    GreenBase.red,
    GreenBase.green,
    GreenBase.blue,
    20, 
    true
  )
  ctx.fillStyle = baseGreenVariant.toRGBString()
  ctx.fillRect(0, 0, winW, winH)

  for(let i = 0; i < numberOfStars; i++) {
    const starSize = Math.round(Math.random() * 5)
    makeCircle(ctx, {
      x: Math.round(Math.random() * winW), 
      y: Math.round(Math.random() * winH/2),
      radius: starSize,
      color: 'rgb(255, 255, 255)'
    })
  }

  // horizon
  ctx.fillStyle = 'black'
  ctx.beginPath()
  ctx.moveTo(0, winH/2);
  ctx.lineTo(winW, winH/2);
  ctx.stroke();

  const reduceBy = 10;
  ctx.fillStyle = `rgb(${baseGreenVariant.red -  reduceBy}, ${baseGreenVariant.green - reduceBy}, ${baseGreenVariant.blue - reduceBy})`
  ctx.fillRect(0, winH/2, winW, winH/2)
}
