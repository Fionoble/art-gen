export function randomHex() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

export function randomRGB(asObj = false): String | any {
  const red = Math.round(Math.random()*255)
  const green = Math.round(Math.random()*255)
  const blue = Math.round(Math.random()*255)

  return asObj ? {red, green, blue} : `rgb(${red}, ${green}, ${blue})`
}

export function randomRGBWithinRange(r: number, g: number, b: number, range: number) {
  const getWithRange = (v: number) => v - (range/2) + (Math.random()*range);
  return `rgb(${getWithRange(r)}, ${getWithRange(g)}, ${getWithRange(b)})`
}

export type CircleArgs = { 
  x: number;
  y: number;
  radius: number;
  color?: string;
  stroke?: boolean;
  strokeColor?: string;
}

export function makeCircle(context: CanvasRenderingContext2D, args: CircleArgs) {
  const {x, y, radius, color, stroke, strokeColor} = args
  const fillColor = color ? color : randomRGB()
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)

  if(stroke) {
    context.fillStyle = strokeColor ? strokeColor : fillColor
    context.stroke()
  }
  context.fillStyle = fillColor
  context.fill()
}

export type RectArgs = { 
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  color?: string;
}

export function makeRectWithRotation(context: CanvasRenderingContext2D, args: RectArgs) {
  const {x,y,width,height,rotation, color} = args;

  // first save the untranslated/unrotated context
  context.save();

  context.beginPath();
  
  // move the rotation point to the center of the rect
  context.translate( x+width/2, y+height/2 );

  // rotate the rect
  if(rotation)context.rotate(rotation*Math.PI/180);

  // draw the rect on the transformed context
  // Note: after transforming [0,0] is visually [x,y]
  //       so the rect needs to be offset accordingly when drawn
  context.rect( -width/2, -height/2, width,height);

  context.fillStyle = color ? color : randomRGB();
  context.fill();

  // restore the context to its untranslated/unrotated state
  context.restore();
}