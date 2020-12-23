import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'

require('./bootstrap');
const el = document.getElementById('app')



/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => require(`./Pages/${name}`).default}
  />,
  el
)
