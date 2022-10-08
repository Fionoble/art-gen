import './style.css'
import setSelect, {OptionData} from './components/select'
import drawExamples from './examples'

const dlBtn = document.getElementById('downloadButton')
const redrawBtn = document.getElementById('redrawButton')
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
const context = canvas.getContext('2d')
let drawCallback = drawExamples[0].callback;

dlBtn?.addEventListener('click', ()=> {
  const l = document.createElement('a')
  l.download = 'filename.png'
  l.href = canvas.toDataURL()
  l.click()
})

canvas.width  = window.innerWidth
canvas.height = window.innerHeight

if(context) {
  drawCallback(context)
}

setSelect(drawExamples, (item: OptionData) => {
  drawCallback = item.callback
  if(context) drawCallback(context);
})

redrawBtn?.addEventListener('click', ()=> {
  if(context) drawCallback(context);
})