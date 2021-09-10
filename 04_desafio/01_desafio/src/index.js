import ReactDOM from 'react-dom'
import App from './App'

import { GlobalStyle } from './theme/globals'

import './theme/styles.css'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root')
)