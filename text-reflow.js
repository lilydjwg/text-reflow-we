'use strict'

function reflow(e) {
  const sideMargin = 10

  // get device width in css pixels
  const winWidth = window.innerWidth

  // get nearest non-inline parent.
  let target = e.target
  for(let i=e.target; i!=null; i = i.parentElement) {
    const icss = window.getComputedStyle(i)
    target = i
    if(icss['display'] != 'inline') break
  }

  // get width/left values for target tag
  const bbox = target.getBoundingClientRect()

  // if box is wider than screen, reset width to make it fit
  if(bbox.width > winWidth) {
    const newWidth = winWidth - (2*sideMargin)
    target.style.width = newWidth + 'px'
  } else {
    target.style.width = ''
  }
}

document.addEventListener('click', reflow)
