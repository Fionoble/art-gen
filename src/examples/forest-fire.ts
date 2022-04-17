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
  ctx.save()

  ctx.fillStyle = baseGreenVariant.toRGBString()
  ctx.fillRect(0, 0, winW, winH)

  // stars
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

  // ground
  const reduceBy = 10;
  ctx.fillStyle = `rgb(${baseGreenVariant.red -  reduceBy}, ${baseGreenVariant.green - reduceBy}, ${baseGreenVariant.blue - reduceBy})`
  ctx.fillRect(0, winH/2, winW, winH/2)

  //path
  const pathStart = (winW / 4) + Math.random() * (winW /2)
  ctx.moveTo(pathStart - 50, winH)
  // ctx.bezierCurveTo(pathStart - 50 + 5, winH  - 5, winW/2, winH/2, winW/2 - 5, winH/2)
  ctx.lineTo(winW/2 - 5, winH/2)
  ctx.lineTo(winW/2 + 5, winH/2)
  ctx.lineTo(pathStart + 50, winH)
  // ctx.bezierCurveTo(winW/2, winH/2, pathStart -5, winH  - 5, pathStart + 50, winH)

  ctx.lineTo(pathStart - 50, winH)
  ctx.stroke()
  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fill()

  // drawTree(ctx, 500, 500)
  for(let i = 0; i < 25; i ++){
    drawTree(ctx, Math.round(Math.random() * winW), winH/2 + Math.round(Math.random() * winH/2))
  }
}



const drawTree = (ctx: CanvasRenderingContext2D, x: number, y: number) => {

  ctx.fillStyle = randomRGBWithinRange(71, 33, 9, 10);
  ctx.fillRect(x - 20, y - 20, 40, 50)

  ctx.restore()

  const trunkTop = y - 20
  const treeWidth = 120
  ctx.beginPath()
  ctx.moveTo(x - (treeWidth/2), trunkTop)
  ctx.lineTo(x + (treeWidth/2), trunkTop)
  ctx.lineTo(x, trunkTop - treeWidth)
  ctx.lineTo(x - (treeWidth/2), trunkTop)

  ctx.strokeStyle = 'yellow'
  ctx.stroke()
  ctx.fillStyle = 'green'
  ctx.fill()

  ctx.restore()

  ctx.beginPath()
  ctx.moveTo(x - (treeWidth/2) + 20, trunkTop - 10)
  ctx.lineTo(x + (treeWidth/2) - 20, trunkTop - 10)
  ctx.lineTo(x, trunkTop - treeWidth + 20)
  ctx.lineTo(x - (treeWidth/2) + 20, trunkTop - 10)
  
  const oldWidth = ctx.lineWidth;
  ctx.lineWidth = 10;
  ctx.lineJoin = 'round'
  ctx.strokeStyle = 'darkgreen'
  ctx.stroke()
  ctx.lineWidth = oldWidth;

}