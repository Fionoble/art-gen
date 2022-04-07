import './style.css'
import {randomRGB, randomRGBWithinRange, makeRectWithRotation, makeCircle} from '../packages/art-gen-utils';

const dlBtn = document.getElementById('downloadButton')
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

dlBtn?.addEventListener('click', ()=> {
    const l = document.createElement('a')
    l.download = 'filename.png'
    l.href = canvas.toDataURL()
    l.click()
    console.log(l.href)
})

// set size
canvas.width  = window.innerWidth
canvas.height = window.innerHeight

// do art creation here with context
// const draw = (ctx: CanvasRenderingContext2D) => {
//   const winW = window.innerWidth;
//   const winH = window.innerHeight;

//   const {red, green, blue} = randomRGB(true);// as {red: number, blue: number, green: number};
//   const numberOfBoxes = 1000;
//   ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
//   ctx.fillRect(0, 0, winW, winH)

//   for(let i = 0; i < numberOfBoxes; i++) {
//     const sqSize = Math.round(Math.random() * 100)
//     makeRectWithRotation(ctx, {
//       x: Math.round(Math.random() * winW), 
//       y: Math.round(Math.random() * winH),
//       width: sqSize,
//       height: sqSize,
//       rotation: Math.round(Math.random() * 360),
//       color: randomRGBWithinRange(red, green, blue, 25)
//     })
//   }
// }

const draw = (ctx: CanvasRenderingContext2D) => {
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const numberOfStars = 250;
  ctx.fillStyle = `rgb(0, 0, 0)`
  ctx.fillRect(0, 0, winW, winH)

  for(let i = 0; i < numberOfStars; i++) {
    const sqSize = Math.round(Math.random() * 10)
    makeCircle(ctx, {
      x: Math.round(Math.random() * winW), 
      y: Math.round(Math.random() * winH),
      radius: sqSize,
      color: 'rgb(255, 255, 255)'
    })
  }
}

if(context) draw(context)