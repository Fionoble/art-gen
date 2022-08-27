import {randomRGBWithinRange, makeCircle} from '../../packages/art-gen-utils';

const GreenBase = {
    red:28, 
    green: 54, 
    blue: 35
};

export const draw = (ctx: CanvasRenderingContext2D) => {
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const numberOfStars = 400;

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
    const starSize = Math.round(Math.random() * 3)
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
  const road = new Path2D()
  const roadBuffer = new Path2D()
  const pathStart = (winW / 4) + Math.random() * (winW /2)
  const drawRoad = (c:CanvasRenderingContext2D | Path2D, roadWidth = 50) => {
    c.moveTo(pathStart - roadWidth, winH)
    c.lineTo(winW/2 - 5, winH/2)
    c.lineTo(winW/2 + 5, winH/2)
    c.lineTo(pathStart + roadWidth, winH)

    c.lineTo(pathStart - roadWidth, winH)
  } 
  drawRoad(ctx)
  drawRoad(road)
  drawRoad(roadBuffer, 250)

  ctx.stroke(road)  
  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fill()
  
  
  
  // moon
  const moonData = {
    x: Math.round(Math.random() * winW), 
    y: Math.round(Math.random() * winH/4),
    radius: Math.round(20 + Math.random() * 10),
    color: 'rgb(255, 255, 255)',
  }
  
  ctx.strokeStyle = 'white'
  ctx.filter = 'blur(20px)'
  makeCircle(ctx, moonData)
  ctx.filter = 'blur(150px)'
  const n = 
  makeCircle(ctx, {
    ...moonData, 
    ...{
      radius: 150,
      color: 'rgba(255, 255, 255, 0.5)',
    }
  })
  ctx.filter = 'none'
  makeCircle(ctx, moonData)


  // trees
  const generatedPoints = [];
  for(let i = 0; i < 250; i ++){
    generatedPoints.push({
      x: Math.round(Math.random() * winW), 
      y: winH/2 + Math.round(Math.random() * winH/2),
    })
  }

  const treePoints = generatedPoints.filter((point) => {
    return !ctx.isPointInPath(roadBuffer, point.x, point.y) && 
      !ctx.isPointInPath(roadBuffer, point.x - 25, point.y) &&  
      !ctx.isPointInPath(roadBuffer, point.x + 25, point.y)
  })

  console.log(treePoints.length)

  treePoints.sort((a, b) => {
    if(a.y > b.y) return 1
    return -1
  })
  
  treePoints.forEach((p) => drawTree(ctx, p.x, p.y))
}



const drawTree = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.fillStyle = randomRGBWithinRange(71, 33, 9, 10);
  ctx.fillRect(x - 20, y - 20, 40, 50)
  ctx.stroke()

  ctx.restore()

  const trunkTop = y - 20
  const treeWidth = 120
  ctx.beginPath()
  ctx.moveTo(x - (treeWidth/2), trunkTop)
  ctx.lineTo(x + (treeWidth/2), trunkTop)
  ctx.lineTo(x, trunkTop - treeWidth)
  ctx.lineTo(x - (treeWidth/2), trunkTop)

  ctx.fillStyle = randomRGBWithinRange(42, 107, 32, 25);
  
  ctx.fill()

  ctx.restore()

  // ctx.beginPath()
  // ctx.moveTo(x - (treeWidth/2) + 20, trunkTop - 10)
  // ctx.lineTo(x + (treeWidth/2) - 20, trunkTop - 10)
  // ctx.lineTo(x, trunkTop - treeWidth + 20)
  // ctx.lineTo(x - (treeWidth/2) + 20, trunkTop - 10)
  
  const oldWidth = ctx.lineWidth;
  ctx.lineWidth = 10;
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round';
  ctx.strokeStyle = randomRGBWithinRange(23, 61, 17, 25);
  ctx.stroke()
  ctx.lineWidth = oldWidth;

}

