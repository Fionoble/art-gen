const mainjs = `import './style.css'
import {draw} from './art'

const dlBtn = document.getElementById('downloadButton')
const redrawBtn = document.getElementById('redrawButton')
const canvas = document.getElementById('myCanvas')
const context = canvas.getContext('2d')

dlBtn?.addEventListener('click', ()=> {
    const l = document.createElement('a')
    l.download = 'Art.png'
    l.href = canvas.toDataURL()
    l.click()
})

redrawBtn?.addEventListener('click', ()=> {
    draw(context)
})

// set size
canvas.width  = window.innerWidth
canvas.height = window.innerHeight

if(context) draw(context)
`

module.exports = mainjs