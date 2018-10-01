import React                 from 'react'
import ReactDOM              from 'react-dom'
import App                   from './app'
import registerServiceWorker from './register-service-worker'

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

registerServiceWorker()
