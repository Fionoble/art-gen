import './style.css'
import {draw} from './examples/stars'

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

canvas.width  = window.innerWidth
canvas.height = window.innerHeight

if(context) draw(context)