import {makeCircle} from '../../packages/art-gen-utils';

export const draw = (ctx: CanvasRenderingContext2D) => {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const numberOfStars = 250;
    ctx.fillStyle = `rgb(0, 0, 0)`
    ctx.fillRect(0, 0, winW, winH)
  
    for(let i = 0; i < numberOfStars; i++) {
      const starSize = Math.round(Math.random() * 10)
      makeCircle(ctx, {
        x: Math.round(Math.random() * winW), 
        y: Math.round(Math.random() * winH),
        radius: starSize,
        color: 'rgb(255, 255, 255)'
      })
    }
  }