const artjs = `import * as ArtGenUtils from '@fionoble/art-gen';

// do art creation here with context
export const draw = (ctx) => {
  ctx.fillStyle = ArtGenUtils.randomRGB()
  ctx.fillRect(10, 10, 100, 100)
}
`

module.exports = artjs
