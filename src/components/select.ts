export type OptionData = {
  label: string;
  callback: DrawCallback;
}

type DrawCallback = (context: CanvasRenderingContext2D) => void;

type SelectState = {
  active: boolean;
  selector: HTMLElement | null;
  selectItems: Element | null | undefined;
}

const selectState: SelectState = {
  active: false,
  selector: null,
  selectItems: null,
};

export default function setSelect(options: OptionData[], selectedCallback: (a:any) => void) {
  const selector = document.getElementById("exampleSelect")
  const selectItems = selector?.querySelector('.selectItems')
  selector?.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation()
    selectState.active = !selectState.active
    updateState()
  })
  selectState.selector = selector
  selectState.selectItems = selectItems

  options.forEach((item: OptionData) => {
    const el = document.createElement('div')
    el.classList.add('selectItem')
    el.innerText = item.label
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      console.log('Item', item)
      selectedCallback(item)
      closeSelect()
    })
    selectItems?.appendChild(el)
  })
  
  document.addEventListener("click", closeSelect)
  closeSelect()
}

function updateState() {
  if(selectState.active) {
    selectState.selectItems?.classList.remove('hidden')
  } else {
    selectState.selectItems?.classList.add('hidden')
  }
}

function closeSelect() {
  selectState.active = false;
  updateState();
}