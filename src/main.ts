import './style.css'
// import {draw} from './examples/scattered-boxes'
// import {draw} from './examples/stars'
import {draw} from './examples/forest'

const dlBtn = document.getElementById('downloadButton')
const redrawBtn = document.getElementById('redrawButton')
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

dlBtn?.addEventListener('click', ()=> {
    const l = document.createElement('a')
    l.download = 'filename.png'
    l.href = canvas.toDataURL()
    l.click()
})
redrawBtn?.addEventListener('click', ()=> {
    window.location.reload()
})

canvas.width  = window.innerWidth
canvas.height = window.innerHeight

if(context) draw(context)