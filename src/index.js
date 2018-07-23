import React from 'react';
import ReactDOM from 'react-dom'
import Counter from './Counter.js';
import counter from './reducer'; 
import { createStore } from 'redux'


const store = createStore(counter)
const rootEl= document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter 
          value={store.getState()}
          onIncrement={ () => store.dispatch({ type: 'INCREMENT'})}
          onDecrement={ () => store.dispatch({ type: 'DECREMENT'})}
    />,
    rootEl
)

render()
store.subscribe(render)