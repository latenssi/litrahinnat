import runtime from 'offline-plugin/runtime'
runtime.install()

import React from 'react'
import { render } from 'react-dom'
import { App } from 'App'

render(<App />, document.getElementById('app'))
