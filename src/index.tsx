import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Map from './components/Map'

let mainElement: HTMLElement | null = document.getElementById('main')
if (mainElement == null) {
  mainElement = document.createElement('main')
  mainElement.setAttribute('id', 'main')
  document.body.appendChild(mainElement)
}

const render = () => {
  ReactDOM.render(
    <div>hah
      <Map />
    </div>,
    mainElement,
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Map', render)
}
