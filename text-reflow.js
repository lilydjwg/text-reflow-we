'use strict'

function reflow(e) {
  const sideMargin = 10

  // get device width in css pixels
  const winWidth = window.visualViewport.width

  // get nearest non-inline parent.
  let target = e.target
  for(const i = e.target; i != null; i = i.parentElement) {
    if(i.tagName == 'IMG' || i.tagName == 'VIDEO') {
      return
    }
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
    target.__reflowed = true
  } else if(target.__reflowed) { // don't remove width set by the page itself
    target.style.width = ''
    target.__reflowed = false
  }
}

document.addEventListener('click', reflow)
