import React from 'react'
import Hexagon from 'components/hexagon/hexagon'

import './App.scss'

const App = () =>
  <div className="bc-playground">
    <h1>
      React Component Studio
    </h1>
    <div className="component-demo">
      <h2>
        Hexagon
      </h2>
      <div className="component-props">
        <h3>Props</h3>
        <ul>
          <li>width (number of px)</li>
          <li>color (string)</li>
          <li>children</li>
        </ul>
      </div>
      <div className="component">
        <h3>Default</h3>
        <Hexagon />
      </div>
      <div className="component">
        <h3>Configurable</h3>
        <Hexagon width={100} color="#AF3D40">
          <Hexagon width={100} color="#E8E8E8" />
        </Hexagon>
      </div>
    </div>
  </div>

export default App
