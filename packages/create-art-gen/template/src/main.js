import './style.css'

const dlBtn = document.getElementById('downloadButton')
const canvas = document.getElementById('myCanvas')
const context = canvas.getContext('2d')

dlBtn?.addEventListener('click', ()=> {
    const l = document.createElement('a')
    l.download = 'Art.png'
    l.href = canvas.toDataURL()
    l.click()
    console.log(l.href)
})

// set size
canvas.width  = window.innerWidth
canvas.height = window.innerHeight

// do art creation here with context
const draw = (ctx) => {
  ctx.fillStyle = 'red'
  ctx.fillRect(10, 10, 100, 100)
}

if(context) draw(context)