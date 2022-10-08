import {draw as forestDraw} from './forest'
import {draw as starsDraw} from './stars'
import {draw as scarrteredBoxesDraw} from './scattered-boxes'

const drawExamples = [
  {
    callback: forestDraw,
    label: 'Night Forest',
  },
  {
    callback: starsDraw,
    label: 'Stars',
  },
  {
    callback: scarrteredBoxesDraw,
    label: 'Scattered Boxes',
  },
]

export default drawExamples;